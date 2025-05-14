import axios from "axios";
import { useEffect } from "react";

function PinItem({pin}) {

    const [isFavorite, setIsFavorite] = useState(false);
    const favoritesApiUrl = 'https://f35c0d043023351a.mokky.dev/favorites'
    const localStorageKey = `favorite_${pin.id}`

    useEffect(() => {
        const storedFavoriteStatus = localStorage.getItem(localStorageKey);
        if (storedFavoriteStatus) {
            setIsFavorite(storedFavoriteStatus === 'true');
        }
    }, [localStorageKey]);
    useEffect(() => {
        localStorage.setItem(localStorageKey, isFavorite)
    }, [isFavorite, localStorageKey])

    async function handleFavoriteClick() {
        const newFavoriteStatus = !isFavorite
        setIsFavorite(newFavoriteStatus)

        try{
            if (newFavoriteStatus){
                await axios.post(favoritesApiUrl, {'pinId': pin.id});
            } else {
                const res = await axios.get(favoritesApiUrl)
                const favoriteToRemove = res.data.find(fav => fav.pinId === pin.id)
                if (favoriteToRemove){
                    await axios.delete(`${favoritesApiUrl}/${favoriteToRemove.id}`)
                } else {
                    console.error("err")
                }
            }
        } catch (error) {
            console.error("Error: ", error);
            setIsFavorite(!newFavoriteStatus)
        }
    }

   return(
    <div class="pin-item">
    <img src={pin.image} alt={pin.name} class="pin-item__img" />
    <div class="pin-item__body">
        <h3 class="pin-item__title">{pin.name}</h3>
        <div class="pin-item__actions">
        <button class={`favorite ${isFavorite ? 'favorited' : ''}`} onClick={handleFavoriteClick}>
            <i class={`fa-bookmark ${isFavorite ? 'fa-solid' : 'fa-regular'}`}></i>
            {isFavorite ? 'В избранном' : 'Сохранить'}
        </button>
        </div>
    </div>
    </div>
   );
}

export default PinItem;
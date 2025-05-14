import { useEffect, useState } from "react";
import FavoritesPinItem from "./FavoritesPinItem";
import axios from "axios";

function FavoritesPinList() {

    const [favoritePins, setFavoritePins] = useState([])

    useEffect(() => {
        async function fetchFavoritePins() {
            try {
                const favoriteRes = await axios.get("https://f35c0d043023351a.mokky.dev/favorites")
                const favoritePinsData = favoriteRes.data
                const pinsDetail = await Promise.all(
                    favoritePinsData.map(async (fav) => {
                        try{
                            const pinRes = await axios.get(`https://f35c0d043023351a.mokky.dev/pins/${fav.pinId}`)
                            return { ...fav, pin: pinRes.data}
                        } catch (error) {
                            console.error("Error: ", error)
                            return {...fav, pin: null}
                        }
                    })
                )
            }
        }
        fetchFavoritePins();
    }, [])

    return (
        <div class="pins-grid">
         <FavoritesPinItem />
    </div>
    );
}

export default FavoritesPinList;
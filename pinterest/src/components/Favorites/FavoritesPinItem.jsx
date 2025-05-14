function FavoritesPinItem({favorite}) {
    return (
     <div class="pin-item">
        <img src={favorite.pin.image} alt={favorite.pin.name} class="pin-item__img" />
        <div class="pin-item__body">
            <h3 class="pin-item__title">{favorite.pin.name}</h3>
        </div>
    </div>
    );
}

export default FavoritesPinItem;
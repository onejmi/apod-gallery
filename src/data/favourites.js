export function isFavourite(key) {
   const favourites = JSON.parse(localStorage.getItem('favourites'));
   return favourites != null && favourites.includes(key);
}

export function toggleFavourite(key) {
    let favourites = JSON.parse(localStorage.getItem('favourites'));
    if (favourites == null) {
        favourites = [];
    }
    if (favourites.includes(key)) {
        const index = favourites.indexOf(key);
        favourites.splice(index, 1);
    } else {
        favourites.push(key);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites));
}
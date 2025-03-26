// Récupération des favoris dans le localstorage
let stockFavoris = JSON.parse(localStorage.getItem('favFood')) || {};
console.dir(stockFavoris)
// Récuperation de la place d'affichage
const display = document.querySelector("#favorisDisplay");
console.clear();
// Transformation du stockage provenant du local en tableau pour mieux manipuler
let stockTransform = Object.values(stockFavoris);
console.table(stockTransform);


// Boucle dans le tableau pour récupérer les ID de favoris

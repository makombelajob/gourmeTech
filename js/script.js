import { Burger } from './Components/Burger.js';

// Fonctionnement du burger
Burger();

// Chargement des états sauvegardés depuis le localStorage (si disponibles)
let stockFavoris = JSON.parse(localStorage.getItem("id")) || [];

// Récupération des icônes de favoris
const favIcons = document.querySelectorAll(".fav-btn");


// Boucler sur chaque bouton en particulier
for (const favIcon of favIcons) {
	
	// Récupération de l'ID unique du dataset
	const favIconId = favIcon.dataset.favorisId;
	const favIconName = favIcon.dataset.name;
	
	//Verifier si l'élément est dans les favoris
	const favorisIds = stockFavoris.map(fav => fav.id);
	const isFavorisOk = favorisIds.includes(favIconId);
	
	// Appliquer la couleur rouge si favori existe
	favIcon.style.color = isFavorisOk ? "red" : "initial";
	
	// écouteur sur chaque Bouton
	favIcon.addEventListener("click", function() {
		
		// Mise à jour le stock
		const favorisIds = stockFavoris.map(fav => fav.id);

		if(favorisIds.includes(favIconId)){
			// Supprimer le favori
			favIcon.style.color = "initial";
			stockFavoris = stockFavoris.filter(fav => fav.id !== favIconId);
		}else{
			favIcon.style.color = "red";
			stockFavoris.push({ id: favIconId , name: favIconName});
			console.table(stockFavoris);
		}
		
		// stockage dans le localStorage
		const stockJson = JSON.stringify(stockFavoris);
		localStorage.setItem("id", stockJson);
	});
}
console.table(stockFavoris);
import { Burger } from './Components/Burger.js';
import {filtreRecherche} from "./Components/filtreRecherche.js";
// Fonctionnement du burger
Burger();
filtreRecherche();

// Chargement des états sauvegardés depuis le localStorage (si disponibles)
let stockFavoris = JSON.parse(localStorage.getItem("id")) || [];

// Récupération des icônes de favoris
const favIcons = document.querySelectorAll(".fav-btn");


// Boucler sur chaque bouton en particulier
for (const favIcon of favIcons) {
	// selection de type
	const type = favIcon.closest(".article").querySelector(".type");
	const timer = favIcon.closest(".article").querySelector(".time");
	const level = favIcon.closest(".article").querySelector(".level");
	
	// Récupération de l'ID unique du dataset du button favoris
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
			stockFavoris.push({
				id: favIconId ,
				name: favIconName,
				type: type.textContent,
				time: timer.textContent,
				level: level.textContent
			});
		}
		
		// stockage dans le localStorage
		const stockJson = JSON.stringify(stockFavoris);
		localStorage.setItem("id", stockJson);
	});
}


import {Burger} from  './Components/Burger.js';

// Chargement des états sauvegardés depuis le localStorage (si disponibles)
let stockFavoris = JSON.parse(localStorage.getItem('favFood')) || {};

Burger();

const favIcons = document.querySelectorAll(".fav-btn");

for(const favIcon of favIcons) {
	
	// Récupération de l'ID unique du dataset
	const favIconId = favIcon.dataset.favorisId;
	
	// Vérification de l'état du bouton est rouge dans l'objet JSON
	if(stockFavoris[favIconId] === true) {
		favIcon.style.color = "red";
	}
	
	// Ajout un écouteur d'événement pour chaque bouton
	favIcon.addEventListener("click", function() {
		// Vérification de l'état actuel du button, rouge ou pas
		if(favIcon.style.color === "red") {
			// Garder la couleur rouge
			favIcon.style.color = "initial";
			// Supprimer l'état du button dans stock
			delete stockFavoris[favIconId];
		}else{
			// passer l'état du button en rouge
			favIcon.style.color = "red";
			// stocker l'id du button et son état
			stockFavoris[favIconId] = true;
		}
		// Persistance avec LocalStorage
		const favUser = JSON.stringify(stockFavoris);
		localStorage.setItem('favFood', favUser);
		
	});
}



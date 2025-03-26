import { Burger } from './Components/Burger.js';

// Fonctionnement du burger
Burger();

// Chargement des états sauvegardés depuis le localStorage (si disponibles)
let stockFavoris = JSON.parse(localStorage.getItem('favFood')) || {};

// Récupération des icônes de favoris
const favIcons = document.querySelectorAll(".fav-btn");

// Boucler sur chaque bouton en particulier
for (const favIcon of favIcons) {
	
	// Récupération de l'ID unique du dataset
	const favIconId = favIcon.dataset.favorisId;
	
	// Vérification de l'état du bouton : rouge si favori
	if (stockFavoris[favIconId]) {
		favIcon.style.color = "red";
	} else {
		favIcon.style.color = "initial"; // État par défaut
	}
	
	// Ajout d'un écouteur d'événement pour chaque bouton
	favIcon.addEventListener("click", function () {
		
		// Vérification de l'état actuel du bouton, rouge ou pas
		if (favIcon.style.color === "red") {
			// Si rouge, supprimer l'état du favori
			favIcon.style.color = "initial";
			delete stockFavoris[favIconId]; // Retirer l'ID du favori
		} else {
			// Passer l'état du bouton en rouge (ajouter le favori)
			favIcon.style.color = "red";
			stockFavoris[favIconId] = true; // Ajouter l'ID au stock des favoris
		}
		
		// Persistance avec LocalStorage
		localStorage.setItem('favFood', JSON.stringify(stockFavoris));
	});
}

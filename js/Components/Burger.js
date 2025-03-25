// Définition de la fonction Burger
export function Burger() {
	// Sélection du bouton burger dans le DOM
	const burger = document.querySelector("#burger");
	
	// Sélection du menu déroulant (élément à afficher/masquer)
	const openBtn = document.querySelector(".open");
	
	// Sélection du bouton de fermeture du menu
	const closeBtn = document.querySelector("#close");
	
	// Écouteur d'événements pour l'ouverture du menu lorsque l'utilisateur clique sur le bouton burger
	burger.addEventListener("click", function (e) {
		// Empêche la propagation de l'événement (clic sur l'élément parent)
		//e.stopPropagation();
		
		// Affiche le menu déroulant
		openBtn.style.display = "block";
	});
	
	// Écouteur d'événements pour la fermeture du menu lorsque l'utilisateur clique sur le bouton de fermeture
	closeBtn.addEventListener("click", function (e) {
		// Empêche la propagation de l'événement (clic sur l'élément parent)
		//e.stopPropagation();
		
		// Masque le menu déroulant
		openBtn.style.display = "none";
	});
}

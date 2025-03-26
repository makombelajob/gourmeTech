export function filtreRecherche() {
	const recettes = document.querySelectorAll(".article");
	const searchBar = document.querySelector("#searchBar");
	
	const form = document.querySelector("#search");
	form.addEventListener("submit", function(e) {
		e.preventDefault();
		
		const searchValue = searchBar.value;
		if(!searchValue){
			alert("Vous devez enter un nom pour chercher");
			return;
		}
		
		let foundFood = false;
		
		for(const recette of recettes) {
			const title = recette.querySelector(".title").textContent.toLowerCase();
			
			if(title.includes(searchValue)) {
				recette.style.display = "block";
				foundFood = true;
			}else{
				recette.style.display = "none";
				foundFood = false;
			}
		}
		
		if(!foundFood) {
			alert("Aucun Répas dans le stock");
		}
	});
	
}
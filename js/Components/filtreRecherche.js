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
export function filtreInput(){
	const articles = document.querySelectorAll(".article");
	const inputs = document.querySelectorAll("#hero input");
	for(const input of inputs){
		input.addEventListener("click", function() {
			
			// Récupérer le filtre en cliquant
			const activeFiltre = {
				category: [],
				difficulty: [],
				time: []
			}
			if(input.checked){
				if(["entry", "plat", "dessert"].includes(input.dataset.name)){
					activeFiltre.category.push(input.dataset.name);
				}
				if(["facile", "moyen", "difficile"].includes(input.dataset.name)){
					activeFiltre.difficulty.push(input.dataset.name);
				}
				if(["quick", "middle", "long"].includes(input.dataset.name)){
					activeFiltre.time.push(input.dataset.name);
				}
			}
			
			for(const article of articles){
				const category = article.dataset.category;
				const difficulty = article.dataset.difficulty;
				const time = Number(article.dataset.time);
				
				
				const matchCategory = activeFiltre.category.length ===0 || activeFiltre.category.includes(category);
				const matchDifficulty = activeFiltre.difficulty.length ===0 || activeFiltre.difficulty.includes(difficulty);
				const matchTime = activeFiltre.time.length === 0 ||
					(time < 30 && activeFiltre.time.includes("quick")) ||
					(time >= 30 && time <= 60 && activeFiltre.time.includes("middle")) ||
					(time > 60 && activeFiltre.time.includes("long"));
				
				article.style.display = (matchCategory && matchDifficulty && matchTime) ? "block" : "none";
			}
			
		});
	}
}
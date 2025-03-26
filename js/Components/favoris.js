// Récupération de donnée dans localstorage si existe
let stockFavoris = JSON.parse(localStorage.getItem("id")) || [];

// Récuperation de la balise qui permettra l'affichage de favoris
const displayFavori = document.querySelector("#favorisDisplay");

//Boucle sur les elements stocker
for(const stockFavori of stockFavoris) {
	
	const template = document.querySelector("#template");
	const init = template.content.cloneNode(true);
	
	const id = stockFavori.id;
	const name = stockFavori.name;
	const type = stockFavori.type;
	const time = stockFavori.time;
	const level = stockFavori.level;
	
	const article = init.querySelector("article");
	article.setAttribute("id", id);
	article.setAttribute("class", "article");
	article.setAttribute("data-id", id);
	
	const favBtn = init.querySelector("button");
	favBtn.setAttribute("class", "fav-btn");
	favBtn.textContent = "❤️";
	favBtn.setAttribute("data-favoris-id", id);
	favBtn.addEventListener("click", function() {
		// Récupération de l'Id du button
		const favIconId = Number(this.dataset.favorisId);
		
		// Mise à jour du stock et du localStorage
		stockFavoris = stockFavoris.filter(fav => Number(fav.id) !== favIconId);
		localStorage.setItem("id", JSON.stringify(stockFavoris));
		
		// Suppression de l'article
		this.closest(".article").remove();
		
	});
	
	const image = init.querySelector("img");
	image.setAttribute("src", `../../assets/images/${id}.jpg`);
	image.setAttribute("alt", name);
	
	const title = init.querySelector("h3");
	title.setAttribute("class", "title");
	title.textContent = name;
	
	const spanType = init.querySelector("span:first-of-type");
	spanType.setAttribute("class", "type");
	spanType.textContent = type;
	
	const spanTime = init.querySelector("span:nth-of-type(2)");
	spanTime.setAttribute("class", "time");
	spanTime.textContent = time;
	
	const spanLevel = init.querySelector("span:last-of-type");
	spanLevel.setAttribute("class", "level");
	spanLevel.textContent = level;
	
	const voirPlus = init.querySelector("a");
	voirPlus.setAttribute("class", "voir");
	voirPlus.textContent = "Voir la recette";
	voirPlus.href = "recette.html";
	
	displayFavori.appendChild(init);
}

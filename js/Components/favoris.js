
let stockFavoris = JSON.parse(localStorage.getItem("id")) || [];
console.table(stockFavoris);
const displayFavori = document.querySelector("#favorisDisplay");


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
	voirPlus.href = "a-propos.html";
	
	displayFavori.appendChild(init);
}

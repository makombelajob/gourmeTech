export function filtreRecherche() {
	
	const searchBar = document.querySelector("#searchBar");
	searchBar.addEventListener("change", function() {
		console.log(this.value);
	});
	
	const form = document.querySelector("#search");
	form.addEventListener("submit", function(e) {
		e.preventDefault();
		console.log("Hello");
	});
	
}
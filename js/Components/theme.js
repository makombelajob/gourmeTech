export function theme(){
	// Récuperation du button pour permettre le changement du mode
	const themeBtn = document.querySelector("#theme");
	
	//Récupération du body pour changer le mode
	const body = document.body;
	
	// Vérifier si le theme existe dans le localstorage
	const themeSaved = localStorage.getItem("theme");
	
	if(themeSaved) {
		body.classList.add("dark");
		//Cet else nous permet de passer en mode dark si c'est le mode du system
	}/**else{
		// Si aucun theme n'est sauvegarder on applique celui du système
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
		if(systemTheme){
			body.classList.add("dark");
		}
	}**/
	
	// Ajouter un écouteur d'événement sur le bouton
	themeBtn.addEventListener("click", () => {
		body.classList.toggle("dark");
		
		const themeTest = body.classList.contains("dark") ? "dark" : "";
		localStorage.setItem("theme", themeTest);
	});
	
	// Changement de theme par rapport au système d'exploitation
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
		body.classList.remove("dark");
		localStorage.removeItem("theme");
		if(e.matches){
			body.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
	})
}
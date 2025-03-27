export function slideArticle() {
	function nextAuto(){
		const actives = document.querySelectorAll(".active");
		for(const active of actives){
			active.classList.remove("active");
			if(active.nextElementSibling) {
				active.nextElementSibling.classList.add("active");
			}else{
				active.parentElement.firstElementChild.classList.add("active");
			}
		}
	}
	
	let intervalle = setInterval(nextAuto, 3000);
}
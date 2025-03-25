export function Burger(){
	const openBtn = document.querySelector(".open");
	
	const burger = document.querySelector("#burger");
	burger.addEventListener("click", function () {
		openBtn.style.display = "block";
	});
	
	const closeBtn = document.querySelector("#close");
	closeBtn.addEventListener("click", function(){
		openBtn.style.display = "none";
	});
	
	document.addEventListener("click", function(e) {
		if(!burger.contains(e.target) && !openBtn.contains(e.target)){
			openBtn.style.display = "none";
		}
	});
}
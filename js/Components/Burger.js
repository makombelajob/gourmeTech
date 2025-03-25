export function Burger() {
	const burger = document.querySelector("#burger");
	
	const openBtn = document.querySelector(".open");
	const closeBtn = document.querySelector("#close");
	

	burger.addEventListener("click", function (e) {
		e.stopPropagation();
		openBtn.style.display = "block";
	});
	
	closeBtn.addEventListener("click", function (e) {
		e.stopPropagation();
		openBtn.style.display = "none";
	});
}

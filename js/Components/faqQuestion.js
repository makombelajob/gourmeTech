const faqBtns = document.querySelectorAll(".faq-btn");
for(const faqBtn of faqBtns ) {
	faqBtn.addEventListener("click", function() {
		const faqAnswer = this.parentElement.nextElementSibling;
		faqAnswer.classList.toggle("faq-answer");
		faqAnswer.style.color = "white";
	});
}


let namevalid = emailValid = msgValid = rgpdValid = false;
const btnSubmit = document.querySelector("#submit");

function toutValid() {
	btnSubmit.disabled = !(namevalid && emailValid && msgValid && rgpdValid);
}
function validInput(valid, invalid, feedback) {
	valid.style.display = "block";
	invalid.style.display = "none";
	feedback.style.display = "none";
}
function invalidInput(valid, invalid, feedback) {
	valid.style.display = "none";
	invalid.style.display = "block";
	feedback.style.display = "block";
}
const nameUser =  document.querySelector("#name");
nameUser.addEventListener("change", function() {
	const valid = document.querySelector("#valid-name");
	const invalid = document.querySelector("#invalid-name");
	const feedback = document.querySelector("#feedback-name");
	
	if(this.value.length < 5 ){
		invalidInput(valid, invalid, feedback);
		namevalid = false;
	}else{
		validInput(valid, invalid, feedback);
		namevalid = true;
	}
	toutValid();
});

const email = document.querySelector("#email");
email.addEventListener("change", function() {
	const valid = document.querySelector("#valid-email");
	const invalid = document.querySelector("#invalid-email");
	const feedback = document.querySelector("#feedback-email");
	
	const regex = /\S+@\S+\.\S+/;
	if(!regex.test(this.value)) {
		invalidInput(valid, invalid, feedback);
		emailValid = false;
	}else{
		validInput(valid, invalid, feedback);
		emailValid = true;
	}
	toutValid();
});

const message = document.querySelector("#msg");
message.addEventListener("change", function() {
	const valid = document.querySelector("#valid-msg");
	const invalid = document.querySelector("#invalid-msg");
	const feedback = document.querySelector("#feedback-msg");
	
	if(this.value.length < 30) {
		invalidInput(valid, invalid, feedback);
		msgValid = false;
	}else{
		validInput(valid, invalid, feedback);
		msgValid = true;
	}
	toutValid();
});

const rgpd = document.querySelector("#rgpd");
rgpd.addEventListener("change", function () {
	const feedback = document.querySelector("#feedback-rgpd");
	if(this.checked){
		feedback.style.display = "none";
		rgpdValid = true;
	}else{
		feedback.style.display = "block";
		rgpdvalid = false;
	}
	toutValid();
});

const form = document.querySelector("#contact");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	if(namevalid && emailValid && msgValid && rgpdValid) {
		btnSubmit.removeAttribute("disabled");
		alert("Message Envoyer avec succès 👍");
		location.href = "index.html";
	}else{
		const evenement = new Event("change");
		nameUser.dispatchEvent(evenement);
		email.dispatchEvent(evenement);
		message.dispatchEvent(evenement);
		rgpd.dispatchEvent(evenement);
	}
});
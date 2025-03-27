// Initialisation de variable booléen qui stockeront nos valeurs
let namevalid = emailValid = msgValid = rgpdValid = false;
const btnSubmit = document.querySelector("#submit");

/**
 * fonction qui active le bouton si tout est valide
 */
function toutValid() {
	btnSubmit.disabled = !(namevalid && emailValid && msgValid && rgpdValid);
}

/**
 * cette fonction sert à l'affichage de message valid si valid
 * @param {boolean} valid 
 * @param {boolean} invalid 
 * @param {boolean} feedback 
 */
function validInput(valid, invalid, feedback) {
	valid.style.display = "block";
	invalid.style.display = "none";
	feedback.style.display = "none";
}

/**
 * cette fonction sert à l'affichage de message invalid si invalid
 * @param {boolean} valid 
 * @param {boolean} invalid 
 * @param {boolean} feedback 
 */
function invalidInput(valid, invalid, feedback) {
	valid.style.display = "none";
	invalid.style.display = "block";
	feedback.style.display = "block";
}

// Récupération de valeur nom
const nameUser =  document.querySelector("#name");
nameUser.addEventListener("change", function() {

	// Récupération des messages d'erreurs
	const valid = document.querySelector("#valid-name");
	const invalid = document.querySelector("#invalid-name");
	const feedback = document.querySelector("#feedback-name");
	
	// Condition si le champs n'est pas correcte
	if(this.value.length < 5 ){
		invalidInput(valid, invalid, feedback);
		namevalid = false;
	}else{
		validInput(valid, invalid, feedback);
		namevalid = true;
	}
	toutValid();
});

// Récupération de la valeur email
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

// Récupération de la valeur du message
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

// Récupération du rgpd 
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

// Récuperation du formulaire en entier
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
import * as prjFunctions from "./modules/function.js";
import 'bootstrap';

prjFunctions.isWebp();



window.addEventListener('load', () => {



	const form = document.querySelector('.needs-validation');

	const info = document.querySelector('.info')

	const emailPhoneInput = form.querySelector('.emailPhone')
	const emailInput = form.querySelector('.email')
	const phoneInput = form.querySelector('.phone')

	const emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const phoneFormat = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

	if (emailPhoneInput) {
		emailPhoneInput.addEventListener('input', (input) => {
			if (input.target.value.match(emailFormat) || input.target.value.match(phoneFormat)) {
				emailPhoneInput.setCustomValidity("");
			} else {
				emailPhoneInput.setCustomValidity("invalid");
			}
		})
	}

	if (emailInput) {
		emailInput.addEventListener('input', (input) => {
			console.log(input.target.value.match(emailFormat))
			if (input.target.value.match(emailFormat)) {
				emailInput.setCustomValidity("");
			} else {
				emailInput.setCustomValidity("invalid");
			}
		})
	}

	if (phoneInput) {
		phoneInput.addEventListener('input', (input) => {
			if (input.target.value.match(phoneFormat)) {
				phoneInput.setCustomValidity("");
			} else {
				phoneInput.setCustomValidity("invalid");
			}
		})
	}

	if (form) {
		form.addEventListener('submit', (event) => {
			if (!form.checkValidity()) {

				event.preventDefault();
				event.stopPropagation();

				form.classList.add('was-validated');
			}
		})
	}

})

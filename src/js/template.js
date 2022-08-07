import * as prjFunctions from "./modules/function.js";
import 'bootstrap';

prjFunctions.isWebp();



window.addEventListener('load', () => {



	const form = document.querySelector('.needs-validation');

	const info = document.querySelector('.info')

	const emailPhoneInput = form.querySelector('.email')

	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const phoneFormat = /^[+]?([\d]{0,3})?[\(\.\-\s]?([\d]{3})[\)\.\-\s]*([\d]{3})[\.\-\s]?([\d]{4})$/;

	emailPhoneInput.addEventListener('input', (input) => {
		if (input.target.value.match(mailFormat) || input.target.value.match(phoneFormat)) {
			emailPhoneInput.setCustomValidity("");
		} else {
			emailPhoneInput.setCustomValidity("invalid");
		}
	})

	form.addEventListener('submit', (event) => {

		if (!form.checkValidity()) {

			event.preventDefault();
			event.stopPropagation();

			form.classList.add('was-validated');

		}

	})

})

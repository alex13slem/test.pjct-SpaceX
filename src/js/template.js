import * as prjFunctions from "./modules/function.js";
import 'bootstrap';

prjFunctions.isWebp();

(() => {

	window.addEventListener('load', () => {

		// Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
		const forms = document.getElementsByClassName('needs-validation');

		// Зацикливайтесь на них и предотвращайте подчинение
		const validation = Array.prototype.filter.call(forms, (form) => {


			form.addEventListener('submit', (event) => {

				const emailInput = form.querySelector('.email')
				let emailInputValue

				const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				const phoneFormat =
					/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

				if (emailInput.value.match(mailFormat) ||
					emailInput.value.match(phoneFormat)) {
					emailInput.setCustomValidity("");
				} else {
					emailInput.setCustomValidity("invalid");

				}

				if (form.checkValidity() === false) {

					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();
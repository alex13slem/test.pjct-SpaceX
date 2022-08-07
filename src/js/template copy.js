import * as prjFunctions from "./modules/function.js";
import 'bootstrap';

prjFunctions.isWebp();



window.addEventListener('load', () => {



	const form = document.querySelector('.needs-validation');

	const info = document.querySelector('.info')

	form.addEventListener('submit', (event) => {

		const emailPhoneInput = form.querySelector('.email')

		const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		const phoneFormat = /^[+]?([\d]{0,3})?[\(\.\-\s]?([\d]{3})[\)\.\-\s]*([\d]{3})[\.\-\s]?([\d]{4})$/;

		if (emailPhoneInput.value.match(mailFormat) || emailPhoneInput.value.match(phoneFormat)) {

			emailPhoneInput.setCustomValidity("");

		} else {

			emailPhoneInput.setCustomValidity("invalid");

		}

		if (!form.checkValidity()) {

			event.preventDefault();
			event.stopPropagation();

			form.classList.add('was-validated');

		} else {

			fetch("<?= POST_FORM_ACTION_URI ?>", {

				method: "POST",
				body: new FormData(form),

			}).then((response) => {

				console.log(response);

				if (response.ok) {

					console.log('done')
					form.remove();
					info.innerText = "Сообщение успешно отправлено!";

				} else {

					console.log('falce')
					form.remove()
					info.innerText = "Ошибка отправки!";

				}
			})
		}

	})

})

import * as prjFunctions from "./modules/function.js";
import 'bootstrap';

prjFunctions.isWebp();


// -------------------------------------------------------

const header = document.querySelector('.header');
const burgerBtn = header.querySelector('.burger');

burgerBtn.addEventListener('click', evt => {

	header.classList.toggle('header_open');
})
import * as prjFunctions from "./modules/function.js";

prjFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper1 = new Swiper('.swiper1', {
	modules: [Navigation, Pagination],

	// loop: true,
	// autoHeight: true,
	slidesPerView: 1,
	spaceBetween: 32,
	breakpoints: {
		1361: {
			slidesPerView: 4,
		},
		1111: {
			slidesPerView: 3,
		},
		822: {
			slidesPerView: 2,
		},
		787: {
			slidesPerView: 3,
		},
		538: {
			slidesPerView: 2,
		},
	},

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
});


// -------------------------------------------------------

const header = document.querySelector('.header');
const burgerBtn = header.querySelector('.burger');

burgerBtn.addEventListener('click', evt => {

	header.classList.toggle('header_open');
})
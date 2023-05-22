import { renderGrid } from "./functions/render.js";
import { activateNavLinks } from "./functions/activateNavLinks.js";
import { btnUp } from "./components/btnUp.js";
import { activateHamburger } from "./functions/activateHamburger.js";

import './components/productCard.js'

const themeButton = document.querySelector('.theme-button');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('dark-theme', document.body.classList.contains('dark-theme'));
});

if (localStorage.getItem('dark-theme') === 'true') {
  document.body.classList.toggle('dark-theme');
}

renderGrid();
activateNavLinks();
activateHamburger();
btnUp.addEventListener();
window.onload = () => {
  document.body.classList.add('loaded');
}
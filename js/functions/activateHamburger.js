const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.nav.links-container');

export const activateHamburger = () => {
  hamburger.addEventListener('click', evt => {
    hamburger.classList.toggle('active');
    links.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link .link').forEach(n =>
    n.addEventListener('click', evt => {
      hamburger.classList.toggle('active');
      links.classList.toggle('active');
    }));
}

const navLinks = document.querySelectorAll('.nav-link .link');
const sections = document.querySelectorAll('.section-container');
const navBar = document.querySelector('.navbar');

export const activateNavLinks = () => {
  window.addEventListener('scroll', evt => {
    let scrollDist = window.scrollY;

    sections.forEach((el, i) => {
      if (el.offsetTop - navBar.clientHeight - 200 <= scrollDist) {
        navLinks.forEach(el => {
            el.classList.remove('active');
        });
        navLinks[i].classList.add('active');
      } else {
        navLinks[i].classList.remove('active');
      }
    });
  })
}
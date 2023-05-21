export const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    if (this.el.classList.contains('btn-up__hide') && !this.el.classList.contains('btn-up__hiding')) {
      this.el.classList.remove('btn-up__hide');
      this.el.classList.add('btn-up__hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up__hiding');
      }, 200);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-up__hide') && !this.el.classList.contains('btn-up__hiding')) {
      this.el.classList.add('btn-up__hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up__hide');
        this.el.classList.remove('btn-up__hiding');
      }, 200);
    }
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });

    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0
      });
    }
  }
}
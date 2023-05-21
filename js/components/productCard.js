import { renderForm } from "../functions/renderForm.js";

const productCardTmp = document.createElement('div');
productCardTmp.className = 'product-card';

const poster = document.createElement('img');
poster.className = 'product-img';

const productInfo = document.createElement('div');
productInfo.className = 'product-info';

const title = document.createElement('h2');
title.className = 'product-name';

const button = document.createElement('button');
button.className = 'buy-button';
button.textContent = 'Купить';

const date = document.createElement('p');
date.className = 'date';

productInfo.appendChild(title);
productInfo.appendChild(button);
productInfo.appendChild(date);

productCardTmp.appendChild(poster);
productCardTmp.appendChild(productInfo);

const style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', '/css/productCard.css');

const reflect = (params, obj) => {
  params.forEach(param => {
    Object.defineProperty(obj, param, {
      get() {
        return this.getAttribute(param);
      },
      set(value) {
        this.setAttribute(param, value);
      }
    });
  });
};

const params = ['title', 'date', 'poster'];

class ProductCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const temp = productCardTmp.cloneNode(true);
    const styleTmp = style.cloneNode(true);
    
    shadow.appendChild(styleTmp);
    shadow.appendChild(temp);

    shadow.querySelector('.buy-button').addEventListener('click', evt => {
      renderForm(shadow.querySelector('.product-name').textContent,
       shadow.querySelector('.product-img').src);
    })

    const themeButton = document.querySelector('.theme-button');

    themeButton.addEventListener('click', () => {
      shadow.querySelector('.product-card').classList.toggle('dark-theme');
    });

    reflect(params, this);
  }

  static get observedAttributes() {
    return params;
  }

  attributeChangedCallback(param, oldValue, newValue) {
    switch (param) {
      case 'title':
        return this.shadowRoot.querySelector('.product-name').textContent = newValue;
      
      case 'date':
        return this.shadowRoot.querySelector('.date').textContent = newValue;

      case 'poster':
        return  this.shadowRoot.querySelector('.product-img').src = newValue;
    }
  }
}

customElements.define('product-card', ProductCard);
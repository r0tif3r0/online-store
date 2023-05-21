import { mapProduct } from "./mapProduct.js";
import { getDayInfo } from "./getDayInfo.js";

import { laptopsDB } from "../db/laptopsDB.js";
import { phonesDB } from "../db/phonesDB.js";
import { tabletsDB } from "../db/tabletsDB.js";
import { headphonesDB } from "../db/headphonesDB.js";
import { tvsDB } from '../db/tvsDB.js';

const laptopsContainer = document.querySelector('.laptops .products-container');
const phonesContainer = document.querySelector('.phones .products-container');
const tabletsContainer = document.querySelector('.tablets .products-container');
const headphonesContainer = document.querySelector('.headphones .products-container');
const tvsContainer = document.querySelector('.tvs .products-container');

const renderProduct = (productData) => {
  const product = document.createElement('product-card');

  product.title = productData.title;
  product.date = 'Дата добавления: ' + getDayInfo(productData.date);
  product.poster = productData.poster;

  return product;
};

const renderCategoryGrid = (data) => {
  const fragment = document.createDocumentFragment();
  const products = data.map(res => renderProduct(mapProduct(res)));

  products.forEach(product => {
    fragment.appendChild(product);
  });
  return fragment;
};

export const renderGrid = () => {
  laptopsContainer.appendChild(renderCategoryGrid(laptopsDB));
  phonesContainer.appendChild(renderCategoryGrid(phonesDB));
  tabletsContainer.appendChild(renderCategoryGrid(tabletsDB));
  headphonesContainer.appendChild(renderCategoryGrid(headphonesDB));
  tvsContainer.appendChild(renderCategoryGrid(tvsDB));
}
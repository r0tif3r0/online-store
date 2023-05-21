const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const closeButton = document.querySelector('.form__buttons .close');
const productTitle = document.querySelector('.img-container .title');
const productImg = document.querySelector('.form__img');
const increaseBtn = document.querySelector('.amount-input .plus-btn');
const decreaseBtm = document.querySelector('.amount-input .minus-btn');
const amount = document.querySelector('.amount');
const colors = document.getElementsByName('color');
const comment = document.querySelector('.comment');

const getFullImgPath = (imgPath) => {
  const tmpArr = imgPath.split('/');
  const img = tmpArr.pop();
  return `../img/${tmpArr.pop()}-orig/${img}`;
}

const increaseAmount = () => {
  let value = parseInt(amount.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    amount.value = value > 999 ? 999 : value;
}

const decreaseAmount = () => {
  let value = parseInt(amount.value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    amount.value = value < 0 ? 0 : value;
}

const submitPurchase = (evt) => {
  evt.preventDefault();
  let color = '';
  colors.forEach(col => {
    if (col.checked === true) {
      color = `${col.id} (${col.value})`;
    }
  });
  const comm = comment.value === '' ? 'No comment' : comment.value;
  alert(`ТОВАР КУПЛЕН!\nИнформация о товаре:\nНазвание: ${productTitle.textContent}\nКоличество: ${amount.value}\nЦвет: ${color}\nКомментарий: ${comm}`);
  closeModal();
}

const openModal = () => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

const closeModal = () => {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
  amount.value = '1';
  comment.value = '';
  colors[0].checked = true;
  increaseBtn.removeEventListener('click', increaseAmount);
  decreaseBtm.removeEventListener('click', decreaseAmount);
  form.removeEventListener('click', submitPurchase);
  window.removeEventListener('click', closeModalByWindow);
  closeButton.removeEventListener('click', closeModal);
}

const closeModalByWindow = (evt) => {
  if (evt.target == modal) {
    closeModal();
  }
}

export const renderForm = (title, imgPath) => {
  openModal();

  productTitle.textContent = title;
  productImg.src = getFullImgPath(imgPath);

  amount.oninput = () => {
    if (amount.value.length > 3) {
      amount.value = amount.value.slice(0,3); 
    }
  }
  increaseBtn.addEventListener('click', increaseAmount);
  decreaseBtm.addEventListener('click', decreaseAmount);

  window.addEventListener('click', closeModalByWindow);
  closeButton.addEventListener('click', closeModal);

  form.addEventListener('submit', submitPurchase)
}
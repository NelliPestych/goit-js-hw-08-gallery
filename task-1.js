import pictures from './pictures.js';

const element = document.querySelector('.js-gallery');
const fragment = document.createDocumentFragment();

pictures.forEach(picture => {
  const li = document.createElement('li');
  const image = document.createElement('img');
  const link = document.createElement('a');
  image.src = picture.preview;
  image.alt = picture.description;
  image.dataset.source = picture.original;
  image.classList.add('gallery__image');
  li.classList.add('gallery__item');
  link.classList.add('gallery__link');
  link.href = picture.original;
  li.appendChild(link);
  link.appendChild(image);
  fragment.appendChild(li);
});

element.appendChild(fragment);

const container = document.querySelector('.js-lightbox');
// const containerImage = document.querySelector('.lightbox__image');
//   pictures.forEach(picture => {
//   const containerImage = document.querySelector('.lightbox__image');
//   containerImage.src = picture.original;
// });
element.addEventListener('click', openModal);
function openModal() {
  container.classList.add('is-open');
};

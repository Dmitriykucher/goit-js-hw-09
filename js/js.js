'use strict';
import galleryItems from './gallery-items.js';
function createGallery(gallery) {
  return gallery.reduce((markup, { preview, original }) => {
    markup += `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href=${original}
    >
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt="Tulips"
      />
  
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>
    `;
    return markup;
  }, '');
}
const markupGallery = createGallery(galleryItems);
const gallery = document.querySelector('.js-gallery');
const overlay = document.querySelector('.js-overlay');
const imageOverlay = document.querySelector('.js-imageOverlay');
const closeModalIcon = document.querySelector('.js-closeModalIcon');

gallery.insertAdjacentHTML('afterbegin', markupGallery);
gallery.addEventListener('click', viewOriginal);
overlay.addEventListener('click', closeModal);
closeModalIcon.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModalByPress);

function viewOriginal(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  overlay.classList.add('is-visible');
  imageOverlay.srcset = event.target.dataset.source;
}

function closeModal(event) {
  // if (event.target !== event.currentTarget) {
  //   return;
  // }
  overlay.classList.remove('is-visible');
}

function closeModalByPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  // overlay.classList.remove('is-visible');
  closeModal();
}

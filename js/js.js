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
gallery.insertAdjacentHTML('afterbegin', markupGallery);

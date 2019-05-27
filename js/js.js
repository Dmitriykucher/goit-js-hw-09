'use strict';
import galleryItems from './gallery-items.js';
console.log(galleryItems);
function gallery({ preview, original }) {
  console.log(preview);
}
console.log(gallery(galleryItems));

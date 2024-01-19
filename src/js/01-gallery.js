// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsSelect = document.querySelector('.gallery');
console.log(galleryItemsSelect);

const createGallaryItems = galleryItems 
    .map((galleryItems) => 
    `<li class="gallery__item">

    <a class="gallery__link" href="${galleryItems.original}">
    <img class="gallery__image" src="${galleryItems.preview}" data-src="${galleryItems.original}" alt="${galleryItems.description}" />
    </a>

    </li>`
    ).join("");
    
    console.log(createGallaryItems);
galleryItemsSelect.insertAdjacentHTML('beforeend', createGallaryItems );

 const showModalHandler = new SimpleLightbox (`.gallery a`, {
    animationSpeed:	250,
    captionsData: "alt"
 });
 showModalHandler.on("show.simpleLightbox");
 
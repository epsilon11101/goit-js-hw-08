// Add imports above this line
import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector(".gallery");

const items = galleryItems
  .map((item) => {
    return `
        <a class"gallery__link" href="${item.original}">
            <img class="gallery__image"
            data-source="${item.original}"
            src="${item.preview}"
            alt="${item.description}"
            title="${item.description}"
            />
        </a>
      `;
  })
  .join("");

gallery.innerHTML = items;

let img = new SimpleLightbox(".gallery a", {
  captions: true,
  captionAttribute: "title",
  captionDelay: 250,
});
img.on("show.simplelightbox", function (e) {});

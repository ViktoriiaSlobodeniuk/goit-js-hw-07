import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");
galleryEl.innerHTML = markup;

galleryEl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const urlOrEl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${urlOrEl}" >
`);

  instance.show();
}

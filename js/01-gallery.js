import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener("click", onGalleryClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imageUrl = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`);

  instance.show();
}

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
{
  /* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */
}

import images from "./gallery-items.js";

const createGalleryItem = (image) => {
  const liRef = document.createElement("li");
  liRef.classList.add("gallery__item");

  const linkRef = document.createElement("a");
  linkRef.classList.add("gallery__link");
  linkRef.setAttribute("href", image.original);

  const imgRef = document.createElement("img");
  imgRef.classList.add("gallery__image");
  imgRef.setAttribute("src", image.preview);
  imgRef.setAttribute("data-source", image.original);
  imgRef.setAttribute("alt", image.description);

  linkRef.appendChild(imgRef);
  liRef.appendChild(linkRef);

  return liRef;
};

const imagesGalleryItem = images.map((images) => createGalleryItem(images));
const galleryRef = document.querySelector(".js-gallery");
galleryRef.append(...imagesGalleryItem);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
const onImageClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  //   const largeImageRef = document.querySelector(".lightbox__image");
  //   largeImageRef.setAttribute("src", event.target.dataset.source);
  //   largeImageRef.setAttribute("alt", event.target.alt);
  modalWindowOpener();
};

galleryRef.addEventListener("click", onImageClick);

// Открытие модального окна по клику на элементе галереи.

const modalWindowRef = document.querySelector(".js-lightbox");
const modalWindowOpener = (event) => {
  window.addEventListener("keydown", modalWindowCloseOfEsc)
  modalWindowRef.classList.add("is-open");
};

// Подмена значения атрибута src элемента img.lightbox__image

const largeImageRef = document.querySelector(".lightbox__image");
const modalWindowImageGet = (event) => {
  largeImageRef.setAttribute("src", event.target.dataset.source);
  largeImageRef.setAttribute("alt", event.target.alt);
};
galleryRef.addEventListener("click", modalWindowImageGet);

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

const modalBtnCloseRef = document.querySelector(
  '[data-action="close-lightbox"]'
);
const modalWindowClose = (event) => {
  modalWindowRef.classList.remove("is-open");
  largeImageSrcClear();
  window.removeEventListener("keydown", modalWindowCloseOfEsc)
};
modalBtnCloseRef.addEventListener("click", modalWindowClose);

// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
//  чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

const largeImageSrcClear = (event) => {
  largeImageRef.setAttribute("src", "");
  largeImageRef.setAttribute("alt", "");
};

// Закрытие модального окна по клику на div.lightbox__overlay.

const overlayRef = document.querySelector(".lightbox__overlay");
const modalwindowCloseOverlay = (event) => {
  if (event.target === event.currentTarget) {
    modalWindowClose();
  }
};
overlayRef.addEventListener("click", modalwindowCloseOverlay);

// Закрытие модального окна по нажатию клавиши ESC.
const modalWindowCloseOfEsc = (event) => {
    if (event.code === "Escape") {
      modalWindowClose();
    }
  }

import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

export default function lightBox() {
  refs.galleryContainer.addEventListener('click', onClick);
}

function onClick() {
  if (refs.picture().nodeName !== 'IMG') {
    return;
  }
  const imageRef = event.target;
  const { source } = imageRef.dataset;
  const { alt } = imageRef;
  const instance = basicLightbox.create(
    `<img src = "${source}" alt ="${alt}">`,
  );
  instance.show();
}

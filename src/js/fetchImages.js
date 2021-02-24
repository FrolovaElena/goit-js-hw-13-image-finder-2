import imagesApiService from './apiService';
import updateMarkupGallery from './updateMarkup';

export default function fetchImages() {
  imagesApiService.fetchImages().then(images => {
    updateMarkupGallery(images);
  });
}

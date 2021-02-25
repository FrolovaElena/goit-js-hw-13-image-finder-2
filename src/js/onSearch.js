import refs from './components/refs';
import fetchImages from './fetchImages';
import imagesApiService from './apiService';
import infiniteScroll from './components/infScroll';
import lightBox from './components/lightbox';

export default function onSearch(e) {
  e.preventDefault();

  imagesApiService.query = e.currentTarget.elements.query.value;
  refs.galleryContainer.innerHTML = '';
  imagesApiService.resetPage();

  if (imagesApiService.query !== '') {
    fetchImages();
    refs.input.value = '';
  }
  lightBox();
  infiniteScroll();
}

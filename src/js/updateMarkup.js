import gallery from '../templates/gallery.hbs';
import info from './components/note';
import refs from './components/refs'



export default function updateMarkupGallery(data) {
  if (!data) {
    return  info({
        text: 'Please try another query',
        delay: 2000,
        icon: true,
      });
  }
  const markup = gallery(data);
  return refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

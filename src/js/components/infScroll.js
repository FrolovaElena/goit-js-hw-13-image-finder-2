import fetchImages from '../fetchImages';

export default function infiniteScroll() {
  window.addEventListener('scroll', onScrollGallery);
}

function onScrollGallery() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight > scrollHeight - 3) {
    setTimeout(fetchImages(), 500);
  }
}

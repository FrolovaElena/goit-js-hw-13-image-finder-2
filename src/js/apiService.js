const API_KEY = '20391200-b9e8acd71c8c6c300b0440642';
const BASE_URL = 'https://pixabay.com/api';

class apiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchImages() {
    const url = `${BASE_URL}/?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`;
    return fetch(url)
      .then(res => res.json())
      .then(({hits}) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

const imagesApiService = new apiService();

export default imagesApiService;
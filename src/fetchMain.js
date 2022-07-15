import axios from 'axios';

const KEY_API = 'f70abac86533d424df79b342ee8b9ff4';

export default class FilmsApiService {
  constructor() {
    this.value = '';
  }

  fetchCards(page, value) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&query=${value}&page=${page}`
      )
      .then(response => {
        return response.data;
      });
  }
  get searchQuery() {
    return this.value;
  }
  set searchQuery(newQuery) {
    this.value = newQuery;
  }
  resetPage() {
    this.page = page;
  }
}

const urlPopalarDay = 'https://api.themoviedb.org/3/trending/movie/day';

// popular today
export function fetchPopularCollection(page) {
  return axios
    .get(`${urlPopalarDay}?api_key=${KEY_API}&page=${page}`)
    .then(response => {
      return response.data;
    });
}

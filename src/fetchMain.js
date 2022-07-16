import axios from 'axios';

export class FetchApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.list = 'home';
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.language = 'en-US';
    this.key = 'f70abac86533d424df79b342ee8b9ff4';
  }
  set pageNumber(el) {
    this.page = el;
  }
  get pageNumber() {
    return this.page;
  }

  get currentSearchQuery() {
    return this.searchQuery;
  }

  set currentSearchQuery(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  }

  // get genres
  async fetchGenres() {
    const url = `${this.baseUrl}genre/movie/list?api_key=${this.key}&language=${this.language}`;
    try {
      const response = await fetch(url);
      const results = await response.json();
      return results;
    } catch (error) {
      error;
    }
  }

  // popular movies
  fetchPopularFilmsByPage() {
    const url = `${this.baseUrl}movie/popular?api_key=${this.key}&language=${this.language}&page=${this.page}`;
    return fetch(url)
      .then(response => response.json())
      .then(results => {
        return results;
      });
  }

  // search movie
  async fetchSearchFilms() {
    try {
      const response = await fetch(
        `${this.baseUrl}search/movie?api_key=${this.key}&language=${this.language}&page=${this.page}&include_adult=false&query=${this.searchQuery}`
      );
      const data = await response.json();
      const results = await data;
      console.log(results);
      return results;
    } catch (error) {
      error;
    }
  }
}

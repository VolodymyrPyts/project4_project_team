import { FetchApi } from "./fetchMain";

const refs = {
  form: document.querySelector('.form'),
  searchInput: document.querySelector('input[name=searchQuery]'),
};

refs.form.addEventListener('submit', onSearchSubmit);

const fetchFilms = new FetchApi();

async function onSearchSubmit(event) {
  event.preventDefault();

  fetchFilms.fetchPopularFilmsByPage();

  const request = event.target.elements.searchQuery.value;
}
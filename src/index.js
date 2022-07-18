import './movieModalOpen';

import { FetchApi } from "./fetchMain";

import './filmsListMarkup';

import { fonNightDay } from "./fonNightDay";
import { modalFormLogin } from "./modalFormLogin";

import './movieModalClose';


// references declaration:
const refs = {
  form: document.querySelector('.form'),
  searchInput: document.querySelector('input[name=searchQuery]'),
};

// refs.form.addEventListener('submit', onSearchSubmit);

const fetchFilms = new FetchApi();

// function that searching films from the input
async function onSearchSubmit(event) {
  event.preventDefault();

  const request = event.target.elements.searchQuery.value;
  fetchFilms.currentSearchQuery = request;

  try {
    const { results } = fetchFilms.fetchSearchFilms();

    console.log(results);
  } catch (error) {
    console.log(error.message);
  }

  event.target.reset();
}


fonNightDay()
modalFormLogin()


// import './fetchMain';


fonNightDay();

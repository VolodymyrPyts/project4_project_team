import { FetchApi } from './fetchMain';
import { addLoader, removeLoader } from './loader.js';
import { makemovieForKeywordMarkup } from './makemovieForKeywordMarkup';
import axios from 'axios';
import Notiflix from 'notiflix';

const fetchApi = new FetchApi();

const form = document.querySelector('.form');
const markupMuvieForKeyword = document.querySelector('.container-movie-card');

form.addEventListener('submit', omFormUserSubmit);

async function omFormUserSubmit(event) {
  event.preventDefault();
  addLoader();
  fetchApi.searchQuery = event.currentTarget.elements.searchQuery.value.trim();
  event.currentTarget.reset();
  fetchApi.resetPage();

  try {
    const { results } = await fetchApi.fetchSearchFilms();

    if (results.length === 0) {
      removeLoader();
      return Notiflix.Notify.failure(
        'Sorry, there are no movie matching your search query. Please try again.'
      );
    }
    clearResultsContainer();
    appendResultsMarkup(results);
    removeLoader();
  } catch (error) {
    console.log(error.massage);
  }
}

function appendResultsMarkup(results) {
  markupMuvieForKeyword.insertAdjacentHTML(
    'beforeend',
    makemovieForKeywordMarkup(results)
  );
}

function clearResultsContainer() {
  markupMuvieForKeyword.innerHTML = '';
}
import FetchApi from './fetchMain';
import Notiflix from 'notiflix';
import { makemovieForKeywordMarkup } from './makemovieForKeywordMarkup';
import axios from 'axios';

const fetchApi = new FetchApi();

const form = document.querySelector('.form');
const markupMuvieForKeyword = document.querySelector('.container-movie-card');

form.addEventListener('submit', omFormUserSubmit);

async function omFormUserSubmit(event) {
  event.preventDefault();

  fetchApi.searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  event.currentTarget.reset();
  fetchApi.resetPage();

  try {
    const { results } = await fetchApi.fetchSearchFilms();

    if (results.length === 0) {
      return Notiflix.Notify.failure(
        'Sorry, there are no movie matching your search query. Please try again.'
      );
    }
    clearResultsContainer();
    appendResultsMarkup(results);
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

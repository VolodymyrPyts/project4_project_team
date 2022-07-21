import { FetchApi } from './fetchMain';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initPagination } from './js/pagination';

import { addLoader, removeLoader } from './js/loader';
import { makemovieForKeywordMarkup } from './makemovieForKeywordMarkup';
import { modal} from './js/modal'
import axios from 'axios';
//import Notiflix from 'notiflix';

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
  if(fetchApi.searchQuery === '') {
    return removeLoader();
  }

  try {
    const { total_pages, results } = await fetchApi.fetchSearchFilms();

    if (results.length === 0) {
      removeLoader();
      return Notiflix.Notify.failure(
        'Sorry, there are no movie matching your search query. Please try again.'
      );
    }
    clearResultsContainer();
    appendResultsMarkup(results);

    initPagination(total_pages, fetchApi.searchQuery);
    modal();

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


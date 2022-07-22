import { FetchApi } from '../fetchMain';

import { initPagination } from './pagination';

import { addLoader, removeLoader } from './loader';
import { makemovieForKeywordMarkup } from './makemovieForKeywordMarkup';
import { modal } from './modal';
import axios from 'axios';

const fetchApi = new FetchApi();

const refs = {
  form: document.querySelector('.form'),
  markupMuvieForKeyword: document.querySelector('.container-movie-card'),
  boxError: document.querySelector('.cap__box-error'),
};

const cards = document.querySelector('.container-movie-card');

refs.form.addEventListener('submit', omFormUserSubmit);

async function omFormUserSubmit(event) {
  event.preventDefault();
  addLoader();
  fetchApi.searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  event.currentTarget.reset();
  fetchApi.resetPage();
  if (fetchApi.searchQuery === '') {
    refs.boxError.classList.remove('is-hidden');
    return removeLoader();
  }

  try {
    const { total_pages, results } = await fetchApi.fetchSearchFilms();

    if (results.length === 0) {
      removeLoader();
      return refs.boxError.classList.remove('is-hidden');
    }

    clearResultsContainer();
    appendResultsMarkup(results);

    refs.boxError.classList.add('is-hidden');

    initPagination(total_pages, fetchApi.searchQuery);
    localStorage.setItem('films-request-result', JSON.stringify(results));
    modal();

    removeLoader();
  } catch (error) {
    console.log(error.message);
    removeLoader();
  }
}

function appendResultsMarkup(results) {
  refs.markupMuvieForKeyword.insertAdjacentHTML(
    'beforeend',
    makemovieForKeywordMarkup(results)
  );
}

function clearResultsContainer() {
  refs.markupMuvieForKeyword.innerHTML = '';
}

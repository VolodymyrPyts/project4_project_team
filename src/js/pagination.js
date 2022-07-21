import { FetchApi } from './../fetchMain';
import { makemovieForKeywordMarkup } from './makemovieForKeywordMarkup';
import { addLoader, removeLoader } from './loader';
import { modal } from './modal';

const drawSectionRef = document.querySelector('.container-movie-card');
const paginationWrapperRef = document.querySelector('.pagination__wrapper');
const paginationButtonPrevRef = document.querySelector(
  '.pagination__button--prev'
);
const paginationButtonNextRef = document.querySelector(
  '.pagination__button--next'
);

let pageCount;
const FILMS_REQUEST_RESULT = 'films-request-result';
const fetchApi = new FetchApi();

// const MAX_PAGE_COUNT = 500; виявилося лише для популярних обмеження

paginationButtonPrevRef.addEventListener('click', onPaginationButtonPrevClick);
paginationButtonNextRef.addEventListener('click', onPaginationButtonNextClick);
paginationWrapperRef.addEventListener('click', onPaginationButtonClick);
window.addEventListener('resize', () => {
  paginationButtonsMurkup(fetchApi.pageNumber - 2, fetchApi.pageNumber + 2);
});

export function initPagination(totalPages, searchQuery = '') {
  fetchApi.pageNumber = 1;
  fetchApi.searchQuery = searchQuery;
  pageCount = totalPages;
  paginationButtonsMurkup(fetchApi.pageNumber - 2, fetchApi.pageNumber + 2);
  setButtonArrowState();
}

async function getTrendingFilms() {
  const { total_pages, results } =
    await fetchApi.fetchTrendingWeekFilmsByPage();
  pageCount = total_pages;
  localStorage.setItem(FILMS_REQUEST_RESULT, JSON.stringify(results));
  drawSectionRef.innerHTML = makemovieForKeywordMarkup(results);
  
}

async function getSearchedFilms() {
  const { total_pages, results } = await fetchApi.fetchSearchFilms();
  pageCount = total_pages;
  localStorage.setItem(FILMS_REQUEST_RESULT, JSON.stringify(results));
  drawSectionRef.innerHTML = makemovieForKeywordMarkup(results);
}

function paginationButtonsMurkup(left, right) {
  if (window.innerWidth > 767 && pageCount >= 9) {
    if (left < 3) {
      left = 3;
      right = 7;
    }
    if (right >= pageCount) {
      left = pageCount - 6;
      right = pageCount - 2;
    }
  } else {
    if (left < 1) {
      left = 1;
      right = 5;
    }
    if (right > pageCount) {
      left = pageCount - 4;
      right = pageCount;
      if (left < 1) {
        left = 1;
      }
    }
  }
  if (window.innerWidth > 767 && pageCount < 9) {
    left = 1;
    right = pageCount;
  }

  const buttonCollection = [];
  if (window.innerWidth > 767 && pageCount >= 9) {
    buttonCollection.push(
      `<button type="button" class="${
        fetchApi.pageNumber === 1
          ? 'pagination__button pagination__button--current'
          : 'pagination__button'
      }" data-page="1">1</button>`
    );

    if (left - 1 > 2) {
      buttonCollection.push(
        `<button type="button" class="pagination__button" data-page="${
          left - 3
        }">...</button>`
      );
    } else {
      buttonCollection.push(
        `<button type="button" class="${
          fetchApi.pageNumber === 2
            ? 'pagination__button pagination__button--current'
            : 'pagination__button'
        }" data-page="2">2</button>`
      );
    }
    if (pageCount - right === 1) {
      left--;
      right--;
    }
  }

  for (let i = left; i <= right; i++) {
    buttonCollection.push(
      `<button type="button" class="${
        i === fetchApi.pageNumber
          ? 'pagination__button pagination__button--current'
          : 'pagination__button'
      }" data-page="${i}">${i}</button>`
    );
  }

  if (window.innerWidth > 767 && pageCount >= 9) {
    if (pageCount - right > 2) {
      buttonCollection.push(
        `<button type="button" class="pagination__button" data-page="${
          right + 3
        }">...</button>`
      );
    } else {
      buttonCollection.push(
        `<button type="button" class="${
          fetchApi.pageNumber === pageCount - 1
            ? 'pagination__button pagination__button--current'
            : 'pagination__button'
        }" data-page="${pageCount - 1}">${pageCount - 1}</button>`
      );
    }

    buttonCollection.push(
      `<button type="button" class="${
        fetchApi.pageNumber === pageCount
          ? 'pagination__button pagination__button--current'
          : 'pagination__button'
      }" data-page="${pageCount}">${pageCount}</button>`
    );
  }

  paginationWrapperRef.innerHTML = buttonCollection.join('');
}

function onPaginationButtonClick(e) {
  fetchApi.pageNumber = Number(e.target.dataset.page);
  getData();
}

function onPaginationButtonNextClick() {
  if (fetchApi.pageNumber < pageCount) {
    fetchApi.pageNumber++;
    getData();
  }
}

function onPaginationButtonPrevClick() {
  if (fetchApi.pageNumber > 1) {
    fetchApi.pageNumber--;
    getData();
  }
}

function setButtonArrowState() {
  if (fetchApi.pageNumber === 1) {
    paginationButtonPrevRef.setAttribute('disabled', 'true');
  } else {
    paginationButtonPrevRef.removeAttribute('disabled');
  }
  if (fetchApi.pageNumber === pageCount) {
    paginationButtonNextRef.setAttribute('disabled', 'true');
  } else {
    paginationButtonNextRef.removeAttribute('disabled');
  }
}

async function getData() {
  addLoader();
  if (fetchApi.searchQuery) {
    await getSearchedFilms();
  } else {
    await getTrendingFilms();
  }
  removeLoader();
  modal();

  paginationButtonsMurkup(fetchApi.pageNumber - 2, fetchApi.pageNumber + 2);
  setButtonArrowState();
  goToTopSection();
}

function goToTopSection() {
  drawSectionRef.scrollIntoView();
}

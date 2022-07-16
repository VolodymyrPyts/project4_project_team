import { FetchApi } from './api';

const drawSectionRef = document.querySelector('.draw-section');
const paginationWrapperRef = document.querySelector('.pagination__wrapper');
const paginationButtonPrevRef = document.querySelector(
  '.pagination__button--prev'
);
const paginationButtonNextRef = document.querySelector(
  '.pagination__button--next'
);
const paginationButtonFirstRef = document.querySelector(
  '.pagination__button--first'
);
const paginationButtonLastRef = document.querySelector(
  '.pagination__button--last'
);

let pageCount;
const fetchApi = new FetchApi();
const MAX_PAGE_COUNT = 500;

paginationButtonPrevRef.addEventListener('click', onPaginationButtonPrevClick);
paginationButtonNextRef.addEventListener('click', onPaginationButtonNextClick);
paginationWrapperRef.addEventListener('click', onPaginationButtonClick);
// paginationButtonFirstRef.addEventListener('click', onPaginationButtonClick);
// paginationButtonLastRef.addEventListener('click', onPaginationButtonClick);
getData();

async function getData() {
  const { total_pages, results } = await fetchApi.fetchPopularFilmsByPage();
  pageCount = Math.ceil(total_pages / results.length);
  if (pageCount > MAX_PAGE_COUNT) pageCount = MAX_PAGE_COUNT;
  pageCount = 5;
  drawSectionRef.innerHTML = `Drawing page number ${fetchApi.pageNumber} from ${pageCount} 
  ${window.innerWidth}`;
  paginationButtonsMurkup(fetchApi.pageNumber - 2, fetchApi.pageNumber + 2);
  setButtonState();
}
window.addEventListener('resize', e => {
  paginationButtonsMurkup(fetchApi.pageNumber - 2, fetchApi.pageNumber + 2);
});
function paginationButtonsMurkup(left, right) {
  if (window.innerWidth > 767) {
    if (left < 2) {
      left = 2;
      right = 6;
    }
    if (right >= pageCount) {
      left = pageCount - 5;
      right = pageCount - 1;
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

  const buttonCollection = [];
  if (window.innerWidth > 767) {
    buttonCollection.push(
      `<button type="button" class="${
        fetchApi.pageNumber === 1
          ? 'pagination__button pagination__button--current'
          : 'pagination__button'
      }" data-page="1">1</button>`
    );
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

  if (window.innerWidth > 767) {
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

function setButtonState() {
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

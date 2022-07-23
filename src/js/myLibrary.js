// import { modal } from './modal';
import { Notify } from 'notiflix';
import { genres } from '../genres.json';
import { modal } from './modal';
const libWatchedBtn = document.querySelector('#lib__watched-btn');
const libQueuedBtn = document.querySelector('#lib__queued-btn');
const watchedFilms = localStorage.getItem('Watched');
const queuedFilms = localStorage.getItem('Queued');
const cards = document.querySelector('.container-movie-card');

const watchedFilmsArray = JSON.parse(watchedFilms);
const queuedFilmsArray = JSON.parse(queuedFilms);


window.addEventListener('DOMContentLoaded', onPageLoad);
libWatchedBtn.addEventListener('click', onWatchedBtnClick);
libQueuedBtn.addEventListener('click', onQueuedBtnClick);

function onWatchedBtnClick() {
  if (localStorage.Watched) {
    cards.innerHTML = '';
    renderWatchedFilmsFromStorage();
    libWatchedBtn.classList.add('active_btn');
    libQueuedBtn.classList.remove('active_btn');
  } else {
    Notify.warning('You have no watched films!');
  }
}

function onQueuedBtnClick() {
  if (localStorage.Queued) {
    cards.innerHTML = '';
    renderQueuedFilmsFromStorage();
    libWatchedBtn.classList.remove('active_btn');
    libQueuedBtn.classList.add('active_btn');
  } else {
    Notify.warning('You have no films in your watch queue!');
  }
}

function onPageLoad() {
  if (!localStorage.Watched && !localStorage.Queued) {
    renderEmptyLibrary();
  }
  if (localStorage.Watched && !localStorage.Queued) {
    onWatchedBtnClick();
  }
  if (!localStorage.Watched && localStorage.Queued) {
    onQueuedBtnClick();
  }
  if (localStorage.Watched && localStorage.Queued) {
    onWatchedBtnClick();
  }
}

function renderEmptyLibrary() {
  const emptyLibMarkup = `
    <p class="lib__empty-placeholder">Oops! There is no films here yet:-(</p>
  `;
  cards.insertAdjacentHTML('beforeend', emptyLibMarkup);
}

function renderWatchedFilmsFromStorage() {
  const markup = watchedFilmsArray.map(
    ({ id, title, poster_path, genre_ids, vote_average, release_date }) => {
      const filmsGenresList = getfilmsGenresUl(genre_ids).join(', ');
      return `<div class="movie__card" id=${id}>
    <img class="movie__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}">
    <div class="movie__info">
       <p class="movie__name">${title}</p>
      <div class="movie__data">
       <span class="movie__genre">${filmsGenresList}</span>
       <span class="movie__year">${release_date.slice(0, 4)}</span>
       <span class="movie__rating">${vote_average.toFixed(1)}</span>
       </div>
       </div>
       </div>
       `;
    }
  )
    .join('');
  cards.insertAdjacentHTML('beforeend', markup);
}

function renderQueuedFilmsFromStorage() {
  const markup = queuedFilmsArray.map(
    ({ id, title, poster_path, genre_ids, vote_average, release_date }) => {
      const filmsGenresList = getfilmsGenresUl(genre_ids).join(', ');
      return `<div class="movie__card" id=${id}>
    <img class="movie__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}">
    <div class="movie__info">
       <p class="movie__name">${title}</p>
      <div class="movie__data">
       <span class="movie__genre">${filmsGenresList}</span>
       <span class="movie__year">${release_date.slice(0, 4)}</span>
       <span class="rating">${vote_average.toFixed(1)}</span>
       </div>
       </div>
       </div>
       `;
    }
  )
    .join('');
  cards.insertAdjacentHTML('beforeend', markup);
}

function getfilmsGenresUl(genreId) {
  let filmsGenres = genres.reduce((acc, { id, name }) => {
    if (genreId.includes(id)) {
      acc.push(name);
    }
    return acc;
  }, []);
  if (filmsGenres.length > 3) {
    filmsGenres = filmsGenres.slice(0, 2);
    filmsGenres.push('Other');
  }
  return filmsGenres;
}
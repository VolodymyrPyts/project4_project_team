// import { modal } from './modal';
import { Notify } from 'notiflix';
import { genres } from '../genres.json';
import { modal } from './modal';
import { fonNightDay } from './fonNightDay';

const libWatchedBtn = document.querySelector('#lib__watched-btn');
const libQueuedBtn = document.querySelector('#lib__queued-btn');
const watchedFilms = localStorage.getItem('Watched');
const queuedFilms = localStorage.getItem('Queued');
const cards = document.querySelector('.container-movie-card');

const watchedFilmsArray = JSON.parse(watchedFilms);
const queuedFilmsArray = JSON.parse(queuedFilms);

window.addEventListener('DOMContentLoaded', onPageLoad);
libWatchedBtn?.addEventListener('click', onWatchedBtnClick);
libQueuedBtn?.addEventListener('click', onQueuedBtnClick);

function isLibreryNotEmpty(librery) {
  if (
    localStorage.getItem(librery) &&
    JSON.parse(localStorage.getItem(librery)).length > 0
  )
    return true;
}

function onWatchedBtnClick() {
  if (isLibreryNotEmpty('Watched')) {
    // cards.innerHTML = '';
    renderWatchedFilmsFromStorage();
    libWatchedBtn?.classList.add('active_btn');
    libQueuedBtn?.classList.remove('active_btn');
    modal(true);
  } else {
    renderEmptyLibrary();
    Notify.warning('You have no watched films!');
  }
}

function onQueuedBtnClick() {
  if (isLibreryNotEmpty('Queued')) {
    // cards.innerHTML = '';
    renderQueuedFilmsFromStorage();
    libWatchedBtn?.classList.remove('active_btn');
    libQueuedBtn?.classList.add('active_btn');
    modal(true);
  } else {
    renderEmptyLibrary();
    Notify.warning('You have no films in your watch queue!');
  }
}

function onPageLoad() {
  fonNightDay();
  if (isLibreryNotEmpty('Watched')) {
    return onWatchedBtnClick();
  }

  if (isLibreryNotEmpty('Queued')) {
    return onQueuedBtnClick();
  }

  return renderEmptyLibrary();
}

function renderEmptyLibrary() {
  if (cards)
    cards.innerHTML =
      '<p class="lib__empty-placeholder">Oops! There is no films here yet:-(</p>';
}

export function renderWatchedFilmsFromStorage() {
  if (cards)
    cards.innerHTML = watchedFilmsArray
      .map(
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
}

export function renderQueuedFilmsFromStorage() {
  if (cards)
    cards.innerHTML = queuedFilmsArray
      .map(
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

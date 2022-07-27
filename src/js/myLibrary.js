
import Notiflix, { Notify }from 'notiflix'
import { genres } from '../genres.json';
import { modal } from './modal';
import '../js/modalTeamsLibrary';
import { fonNightDay } from './fonNightDay';
import defoultImage from '../images/no-poster.webp'
import './scroll';

const libWatchedBtn = document.querySelector('#lib__watched-btn');
const libQueuedBtn = document.querySelector('#lib__queued-btn');

const cards = document.querySelector('.library-container');


let currentLibrery;
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
  currentLibrery = 'Watched';
  if (isLibreryNotEmpty('Watched')) {
    renderFilmsFromStorage('Watched');
    libWatchedBtn?.classList.add('active_btn');
    libQueuedBtn?.classList.remove('active_btn');
    modal(true);
  } else {
    renderEmptyLibrary();
    Notiflix.Notify.warning('You have no watched films!');
  }
}

function onQueuedBtnClick() {
  currentLibrery = 'Queued';
  if (isLibreryNotEmpty('Queued')) {
    renderFilmsFromStorage('Queued');
    libWatchedBtn?.classList.remove('active_btn');
    libQueuedBtn?.classList.add('active_btn');
    modal(true);
  } else {
    renderEmptyLibrary();
    Notiflix.Notify.warning('You have no films in your watch queue!');
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
      `<div class="library-container--empty">
            <p class="lib__empty-placeholder">Add your favourite movies here!</p>
            <img class="library-container__img" alt="movie-chair" src='${defoultImage}' />
        </div>`
}

export function renderFilmsFromStorage(librery) {
  if (!cards || currentLibrery !== librery) return;
  if (isLibreryNotEmpty(librery)) {
    cards.innerHTML = JSON.parse(localStorage.getItem(librery))
      .map(
        ({ id, title, poster_path, genre_ids, vote_average, release_date }) => {
          const filmsGenresList = getfilmsGenresUl(genre_ids).join(', ');
          const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.jp/aaabb1/ffffff/395x574.png?text=This%20movie%20has%20no%20poster%20%3A(';
          return `<div class="movie__card" id=${id}>
    <img class="movie__poster" src=${imageUrl} alt="${title}" loading="lazy">
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
  } else {
    renderEmptyLibrary();
  }
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

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 1000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Quicksand',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '34px',
  warning: {
      background: '#ffffff',
      textColor: '#FF6B08',
      childClassName: 'notiflix-notify-warning',
      notiflixIconColor: '#FF6B08',
      fontAwesomeClassName: 'fas fa-check-circle',
      fontAwesomeIconColor: '#FF6B08',
      backOverlayColor: 'rgba(50,198,130,0.2)',
  }
});
const libWatchedBtn = document.querySelector('#lib__watched-btn');
const libQueuedBtn = document.querySelector('#lib__queued-btn');
const watchedFilms = localStorage.getItem('Watched');
const cards = document.querySelector('.container-movie-card');

const watchedFilmsArray = JSON.parse(watchedFilms);


window.addEventListener('DOMContentLoaded', onPageLoad);

function onPageLoad() {
  if (localStorage.Watched) {
    console.log(watchedFilmsArray);
  }
}


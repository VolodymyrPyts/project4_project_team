
import axios from 'axios';
import * as basicLightbox from 'basiclightbox'
import { genres } from '../genres.json';
import { renderFilmsFromStorage } from './myLibrary';
export function modal(isItLibrery = false) {
  const refs = {
    backdrop: document.querySelector('[data-modal]'),
    closeBtn: document.querySelector('[data-modal-close]'),
    openCards: document.querySelectorAll('.movie__card'),
    modalWrapper: document.querySelector('.modal-wrapper'),
  };
  let watchedArray = localStorage.getItem('Watched')
    ? JSON.parse(localStorage.getItem('Watched'))
    : [];
  let queuedArray = localStorage.getItem('Queued')
    ? JSON.parse(localStorage.getItem('Queued'))
    : [];
  // клік по карткам, відкриває модалку
  refs.openCards.forEach(item => {
    item.addEventListener('click', onOpenModal);
  });
  // клік по кнопці закрити, закриває модалку
  refs.closeBtn.addEventListener('click', onCloseModal);
  // клік по бекдропу, закриває модалку
  refs.backdrop.addEventListener('click', onBackdropClick);
  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }
  // Тільки при натисканні Escape закривається модалка
  function onEscKeyPress(event) {
    const ESC_KEY = event.code === 'Escape';
    if (ESC_KEY) {
      onCloseModal();
    }
  }
  // Функція відкривання модалки. Якщо модалка відкрита, слухаємо подію
  function onOpenModal(event, id) {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEscKeyPress);
    refs.backdrop.classList.remove('is-hidden');
    const currentFilmId = Number(event.currentTarget.id);
    const movieContainer = document.querySelector('.container-movie-card');
    let filmData;
    const filmsArray = JSON.parse(
      localStorage.getItem('films-request-result')
    ).concat(
      JSON.parse(localStorage.getItem('Watched')),
      JSON.parse(localStorage.getItem('Queued'))
    );
    for (let item of filmsArray) {
      const ID = currentFilmId;
      if (item.id === ID) {
        filmData = item;
        break;
      }
    }
    const {
      original_title,
      title,
      genre_ids,
      overview,
      popularity,
      poster_path,
      vote_average,
      vote_count,
    } = filmData;
    const filmsGenresList = getFullFilmsGenresUl(genre_ids).join(', ');
    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.jp/aaabb1/ffffff/395x574.png?text=This%20movie%20has%20no%20poster%20%3A(';
    const modalMarkup = `<div class="modal-box_trailer">
              <img class="modal__poster" src=https://image.tmdb.org/t/p/w500${imageUrl} alt="rectangle"/>
              <button type="button" class="btn-open-trailer">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                  <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM10.555 7.168c-0.156-0.105-0.348-0.168-0.555-0.168-0.552 0-1 0.448-1 1v8c-0.001 0.188 0.053 0.383 0.168 0.555 0.306 0.46 0.927 0.584 1.387 0.277l6-4c0.103-0.068 0.2-0.162 0.277-0.277 0.306-0.46 0.182-1.080-0.277-1.387zM11 9.869l3.197 2.131-3.197 2.131z"></path>
                </svg>
              </button>
            </div>
            <div class="modal__movie-data">
                <p class="modal__movie-title">${title}</p>
                <table class="modal__table">
                    <tr>
                        <td class="modal__data-title">Vote / Votes</td>
                        <td class="modal__data-info">
                            <span class="rating">${vote_average.toFixed(
                              1
                            )}</span>
                            <span class="slash">/</span>
                            <span class="votes">${Math.round(vote_count)}</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="modal__data-title">Popularity</td>
                        <td class="modal__data-info">${Math.round(
                          popularity
                        )}</td>
                    </tr>
                    <tr>
                        <td class="modal__data-title">Original Title</td>
                        <td class="modal__data-info">${original_title}</td>
                    </tr>
                    <tr>
                        <td class="modal__data-title">Genre</td>
                        <td class="modal__data-info">${filmsGenresList}</td>
                    </tr>
                </table>
                <div class="modal__movie-description">
                    <p class="modal__about-title">ABOUT</p>
                    <p class="modal__about-text">${overview}</p>
                    </div>
                    <div class="modal__buttons">
                    <button type="submit" class="modal__add-btn watch-btn" id="addToWatch">
                        <span class="test">${
                          isFilmInWatched()
                            ? 'REMOVE&nbsp;FROM&nbsp;'
                            : 'ADD&nbsp;TO&nbsp;'
                        }</span>
                        <span class="test">WATCHED</span>
                    </button>
                    <button type="submit" class="modal__add-btn queue-btn" id="addToQueue">${
                      isFilmInQueue()
                        ? 'REMOVE&nbsp;FROM&nbsp;'
                        : 'ADD&nbsp;TO&nbsp;'
                    }QUEUE</button>
                </div>`;
    refs.modalWrapper.innerHTML = modalMarkup;
    //Додавання фільмів з модального вікна у локальне сховище
    const addToWatchedBtn = document.querySelector('#addToWatch');
    const addToQueueBtn = document.querySelector('#addToQueue');
    addToWatchedBtn.addEventListener('click', watchedFilmHandler);
    addToQueueBtn.addEventListener('click', queueFilmHandler);
    function watchedFilmHandler() {
      if (isFilmInWatched()) {
        removeFilmFromWatched();
        if (isItLibrery) {
          // document.location.reload();
          onCloseModal();
          renderFilmsFromStorage('Watched');
          modal(true);
        }
      } else {
        addFilmToWatched();
      }
    }
    function queueFilmHandler() {
      if (isFilmInQueue()) {
        removeFilmFromQueue();
        if (isItLibrery) {
          // document.location.reload();
          onCloseModal();
          renderFilmsFromStorage('Queued');
          modal(true);
        }
      } else {
        addFilmToQueue();
      }
    }
    function addFilmToWatched() {
      watchedArray = localStorage.getItem('Watched')
        ? JSON.parse(localStorage.getItem('Watched'))
        : [];
      watchedArray.push(filmData);
      localStorage.setItem('Watched', JSON.stringify(watchedArray));
      addToWatchedBtn.textContent = 'REMOVE FROM WATCHED';
    }
    function addFilmToQueue() {
      queuedArray = localStorage.getItem('Queued')
        ? JSON.parse(localStorage.getItem('Queued'))
        : [];
      queuedArray.push(filmData);
      localStorage.setItem('Queued', JSON.stringify(queuedArray));
      addToQueueBtn.textContent = 'REMOVE FROM QUEUE';
    }
    function removeFilmFromWatched() {
      watchedArray = JSON.parse(localStorage.getItem('Watched'));
      localStorage.setItem(
        'Watched',
        JSON.stringify(watchedArray.filter(item => item.id !== currentFilmId))
      );
      addToWatchedBtn.textContent = 'ADD TO WATCHED';
    }
    function removeFilmFromQueue() {
      queuedArray = JSON.parse(localStorage.getItem('Queued'));
      localStorage.setItem(
        'Queued',
        JSON.stringify(queuedArray.filter(item => item.id !== currentFilmId))
      );
      addToQueueBtn.textContent = 'ADD TO QUEUE';
    }
    function isFilmInWatched() {
      if (localStorage.getItem('Watched')) {
        for (let item of JSON.parse(localStorage.getItem('Watched'))) {
          if (item.id === currentFilmId) {
            return true;
          }
        }
      }
    }
    function isFilmInQueue() {
      if (localStorage.getItem('Queued')) {
        for (let item of JSON.parse(localStorage.getItem('Queued'))) {
          if (item.id === currentFilmId) {
            return true;
          }
        }
      }
    }
    const baseUrl = 'https://api.themoviedb.org/3/';
    const key = 'f70abac86533d424df79b342ee8b9ff4';
    let trailerOficial = '';

    async function fetchTrendMoviesTrailer() {
      try {
        const { data } = await axios.get(`${baseUrl}/movie/${currentFilmId}/videos?api_key=${key}`);
        
        return data;
      }
      catch (error) {
        console.error('ERROR');
      }
    }
    fetchTrendMoviesTrailer().then(data => {
      getsTrailer(data)
    });
    function getsTrailer(data) {
      
      const trailer = data.results;
      trailer.filter(nameTrailer => {
        if (nameTrailer.name === 'Official Trailer') {
          trailerOficial =  nameTrailer.key
        }
      });

      const cardsBtn = document.querySelector('.btn-open-trailer');
                 
      const modalTrailerWindow = basicLightbox.create(`
          <div class="modal">
                 <iframe width="640" height="480" frameborder="0" allowfullscreen="" allow="autoplay" src="https://www.youtube.com/embed/${trailerOficial}?autoplay=1">
                  </iframe>
                  
                  <button type="button" class="trailer__close-btn">
                          <svg width="30" height="30" fill="#fff" xmlns="http://www.w3.org/2000/svg" ><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"></path></svg>
                  </button>
          </div>`
      , {
        onShow: (modalTrailerWindow) => {
          
          modalTrailerWindow.element().querySelector('.trailer__close-btn').onclick = modalTrailerWindow.close
          }
      });
          
      cardsBtn.addEventListener('click', () => {
        modalTrailerWindow.show()
      });
    }
  }
  // Коли модалка закривається, знімаємо слухача подій
  function onCloseModal() {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onEscKeyPress);
    refs.backdrop.classList.add('is-hidden');
  }
}
function getFullFilmsGenresUl(genreId) {
  let filmsAllGenres = genres.reduce((acc, { id, name }) => {
    if (genreId.includes(id)) {
      acc.push(name);
    }
    return acc;
  }, []);
  return filmsAllGenres;
}













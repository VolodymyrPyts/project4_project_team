// import { genres } from '../genres.json';
import { getfilmsGenresUl } from '../filmsListMarkup';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox'
export function modal() {
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

    let watchedBtn;

    let filmData;

    for (let item of JSON.parse(localStorage.getItem('films-request-result'))) {
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
    const filmsGenresList = getfilmsGenresUl(genre_ids).join(', ');

    const modalMarkup = `
            <div class="modal-box_trailer">
              <button type="button" class="btn-open-trailer">
              <svg>
                <use fill="#FF001B" href="./images/symbol-play.svg#icon-play-circle"></use>
              </svg>
              </button>
              <img class="modal__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="rectangle"/>
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
                        <td class="modal__data-info">${Math.round(popularity)}</td>
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
                </div>
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
      } else {
        addFilmToWatched();
      }
    }

    function queueFilmHandler() {
      if (isFilmInQueue()) {
        removeFilmFromQueue();
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
      const nameTrailer = trailer.filter(nameTrailer => {
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

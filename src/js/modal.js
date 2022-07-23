import { genres } from '../genres.json';

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

    let filmData;

    const filmsArray = JSON.parse(localStorage.getItem('films-request-result')).concat(JSON.parse(localStorage.getItem('Watched')), JSON.parse(localStorage.getItem('Queued')));

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
  
    const modalMarkup = `<img class="modal__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="rectangle"/>
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
  return filmsAllGenres
}





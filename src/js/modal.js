import { parsedData } from "./trendMoviesLocalStorage";
import { genres } from '../genres.json';
import { getfilmsGenresUl } from '../filmsListMarkup';

export function modal() {
  const refs = {
    backdrop: document.querySelector('[data-modal]'),
    closeBtn: document.querySelector('[data-modal-close]'),
    openCards: document.querySelectorAll('.movie__card'),
    modalWrapper: document.querySelector('.modal-wrapper')
  };

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
 

  let filmData;
  for (let item of parsedData) {
    const ID = currentFilmId;
    if (item.id === ID) {
      
      filmData = item;
      break
    }
  }
  const { original_title, genre_ids, overview, popularity, poster_path, vote_average, vote_count, release_date } = filmData;
  const filmsGenresList = getfilmsGenresUl(genre_ids).join(', ');
  console.log(vote_average);

   

  const modalMarkup = 
    `<img class="modal__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="rectangle"/>
            <div class="modal__movie-data">
                <p class="modal__movie-title">${original_title}</p>
                <table class="modal__table">
                    <tr>
                        <td class="modal__data-title">Vote / Votes</td>
                        <td class="modal__data-info"> 
                            <span class="rating">${vote_average.toFixed(1)}</span>
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
                    <button type="submit" class="modal__add-btn watch-btn">
                        <span class="test">ADD&nbsp;TO&nbsp;</span>
                        <span class="test">WATCHED</span>
                    </button>
                    <button type="submit" class="modal__add-btn queue-btn">ADD TO QUEUE</button>
                </div>`;
  refs.modalWrapper.innerHTML = modalMarkup;
}

// Коли модалка закривається, знімаємо слухача подій
function onCloseModal() {
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('is-hidden');
}
}

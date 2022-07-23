import axios from 'axios';
import { genres } from './genres.json';
import { initPagination } from './js/pagination';
import { modal } from './js/modal';
const baseUrl = 'https://api.themoviedb.org/3/';
const key = 'f70abac86533d424df79b342ee8b9ff4';
let page = 1;

export async function fetchTrendMovies() {
  try {
    const { data } = await axios.get(
      `${baseUrl}/trending/movie/week?api_key=${key}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error('ERROR');
  }
}

const cards = document.querySelector('.container-movie-card');

fetchTrendMovies().then(data => {
  makeFilmsMarkup(data);
  initPagination(data.total_pages);
  localStorage.setItem('films-request-result', JSON.stringify(data.results));
  modal();
  // console.log(data.results);
});

export function makeFilmsMarkup(movie) {
  const markup = movie.results
    .map(
      ({ id, title, poster_path, genre_ids, vote_average, release_date }) => {
        const filmsGenresList = getfilmsGenresUl(genre_ids).join(', ');
        return `<div class="movie__card" id=${id}>
    <img class="movie__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}">
    <div class="movie__info">
       <p class="movie__name">${trimMovieTitle(title)}</p>
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

export function getfilmsGenresUl(genreId) {
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

export function trimMovieTitle(movieTitle) {
  if (movieTitle.length > 30) {
    return `${movieTitle.substring(0, 30)} <span>...</span>`;
  }
return movieTitle
}

import axios from 'axios';
import { genres } from './genres.json';
import { initPagination } from './js/pagination';
const baseUrl = 'https://api.themoviedb.org/3/';
const key = 'f70abac86533d424df79b342ee8b9ff4';
let page = 1;

async function fetchTrendMovies() {
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
  // console.log(data.results);
});

function makeFilmsMarkup(movie) {
  const markup = movie.results
    .map(({ title, poster_path, genre_ids, vote_average, release_date }) => {
      return `<div class="movie__card">
    <img class="movie__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}">
    <div class="movie__info">
       <p class="movie__name">${title}</p>
      <div class="movie__data">
       <span class="movie__genre">${genre_ids}</span>
       <span class="movie__year">${release_date.slice(0, 4)}</span>
       <span class="rating">${vote_average.toFixed(1)}</span>
       </div>
       </div>
       </div>
       `;
    })
    .join('');

  cards.insertAdjacentHTML('beforeend', markup);
}

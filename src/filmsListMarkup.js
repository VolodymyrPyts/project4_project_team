import axios from 'axios';
import genresData from './genres.json';
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
const renderPoster = 'https://image.tmdb.org/t/p/w500';

const cards = document.querySelector('.container-movie-card');

fetchTrendMovies().then(data => {
  makeFilmsMarkup(data);
  console.log(data.results);
});

function makeFilmsMarkup(movie) {
    const markup = movie.results
        .map(({
            id,
            title,
            poster_path,
            genre_ids,
            genres,
            overview,
            vote_average,
            release_date
        }) => {
      return `<div class="movie-card">
        <img class="movie__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="${
          title}>
    <div class="movie__info">
      <p>ID: ${id}</p>
       <p>${title}</p>
       <p>${overview}</p>
       <p>${vote_average.toFixed(1)}</p>
       <p>${release_date.slice(0, 4)}</p>
       <p>${genre_ids}</p>
       </div>
       </div>
       `;
    }).join('');

  cards.insertAdjacentHTML('beforeend', markup);
}



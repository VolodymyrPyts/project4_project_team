import { getfilmsGenresUl } from '../filmsListMarkup';
import { trimMovieTitle } from '../filmsListMarkup';


export const makemovieForKeywordMarkup = results => {
  return results
    .map(
      ({ id, title, poster_path, genre_ids, vote_average, release_date }) => {
        const filmsGenresList = getfilmsGenresUl(genre_ids).join(', ');
        const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://placehold.jp/aaabb1/ffffff/395x574.png?text=This%20movie%20has%20no%20poster%20%3A(";
        return `<div class="movie__card" id=${id}>
    <img class="movie__poster" src="${imageUrl}" alt="${title}" loading="lazy">
    <div class="movie__info">
       <p class="movie__name">${trimMovieTitle(title)}</p>
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
};

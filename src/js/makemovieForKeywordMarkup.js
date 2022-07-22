import { getfilmsGenresUl } from '../filmsListMarkup';

export const makemovieForKeywordMarkup = results => {
  return results
    .map(
      ({ id, title, poster_path, genre_ids, vote_average, release_date }) => {
        const filmsGenresList = getfilmsGenresUl(genre_ids).join(', ');
        return `<div class="movie__card" id=${id}>
    <img class="movie__poster" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}">
    <div class="movie__info">
       <p class="movie__name">${title}</p>
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
};

export const makemovieForKeywordMarkup = results => {
  return results
    .map(({ poster_path, title, original_title, release_date }) => {
      return `<div class="movie__card">
        <img class="movie__poster" src='https://image.tmdb.org/t/p/original${poster_path}' alt="${title}" loading="lazy" />
        <div class="movie__info">
            <p class="movie__name">${original_title}</p>
            <p class="movie__data">
                <span class="movie__genre">Drama, Action</span>
                <span class="movie__year">${release_date}</span>
            </p>
        </div>
    </div>`;
    })
    .join('');
};

import axios from 'axios';

// trending movies
async function fetchTrendingWeekFilmsByPage() {
  const url = `${this.baseUrl}trending/movie/week?api_key=${this.key}&language=${this.language}&page=${this.page}`;
  const response = await fetch(url);

  return await response.json();
}

export default fetchTrendingWeekFilmsByPage;

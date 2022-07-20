import { fetchTrendMovies } from '../filmsListMarkup'

fetchTrendMovies().then(data => {
    localStorage.setItem("data", JSON.stringify(data));

; // settings object
})
 const savedData = localStorage.getItem("data");
 export const parsedData = JSON.parse(savedData).results;



       
import './styles/styles.css';
import searchWeather from './modules/dom';

const searchButton = document.querySelector('.search button');
searchButton.addEventListener('click', searchWeather);

const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') searchWeather();
});

document.querySelector('.search-bar').value = 'Tokyo';
searchWeather();

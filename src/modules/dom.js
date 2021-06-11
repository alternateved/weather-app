import getWeather from './weather';

function displayWeather(town) {
  const pageBody = document.querySelector('body');
  const infoNode = document.querySelector('.weather');
  const cityNode = document.querySelector('.city');
  const iconNode = document.querySelector('.icon');
  const tempNode = document.querySelector('.temp');
  const descNode = document.querySelector('.description');
  const humiNode = document.querySelector('.humidity');
  const windNode = document.querySelector('.wind');

  getWeather(town).then((object) => {
    cityNode.textContent = `Weather in ${object.name}`;
    iconNode.src = `http://openweathermap.org/img/wn/${object.icon}.png`;
    descNode.textContent = object.description;
    tempNode.textContent = `${object.temp}°C`;
    humiNode.textContent = `Humidity: ${object.humidity}%`;
    windNode.textContent = `Wind speed: ${object.speed} km/h`;
    infoNode.classList.remove('loading');
    pageBody.style.backgroundImage = `url(https://source.unsplash.com/1920x1080/?${object.main})`;
  });
}

function searchWeather() {
  const searchTerm = document.querySelector('.search-bar').value;
  displayWeather(searchTerm);
}

export default searchWeather;

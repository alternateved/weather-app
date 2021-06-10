import './styles.css';

const weather = {
  apiKey: 'f5c2f7ddce129955c85c723e691eab9b',

  buildAddress(town) {
    return (
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      town +
      '&units=metric&appid=' +
      this.apiKey
    );
  },

  async getWeather(town) {
    try {
      const address = weather.buildAddress(town);
      const response = await fetch(address, { mode: 'cors' });
      const weatherData = await response.json();
      return weatherData;
    } catch (err) {
      console.error(err);
    }
  },

  async parseWeather(town) {
    try {
      const data = await weather.getWeather(town);
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      return { name, icon, description, temp, humidity, speed };
    } catch (err) {
      console.error(err);
    }
  },
};

const dom = {
  displayWeather(town) {
    const pageBody = document.querySelector('body');
    const infoNode = document.querySelector('.weather');
    const cityNode = document.querySelector('.city');
    const iconNode = document.querySelector('.icon');
    const tempNode = document.querySelector('.temp');
    const descNode = document.querySelector('.description');
    const humiNode = document.querySelector('.humidity');
    const windNode = document.querySelector('.wind');

    weather.parseWeather(town).then((object) => {
      cityNode.textContent = `Weather in ${object.name}`;
      iconNode.src = `http://openweathermap.org/img/wn/${object.icon}.png`;
      descNode.textContent = object.description;
      tempNode.textContent = `${object.temp}°C`;
      humiNode.textContent = `Humidity: ${object.humidity}%`;
      windNode.textContent = `Wind speed: ${object.speed} km/h`;
      infoNode.classList.remove('loading');
      pageBody.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${object.name})`;
    });
  },
  searchWeather() {
    const searchTerm = document.querySelector('.search-bar').value;
    dom.displayWeather(searchTerm);
  },

  searchWeatherByKey(event) {
    if (event.key == 'Enter') dom.searchWeather();
  },
};

const searchButton = document.querySelector('.search button');
searchButton.addEventListener('click', dom.searchWeather);

const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('keyup', dom.searchWeatherByKey);

dom.displayWeather('Tokyo');
/*
 *  - Set up a blank HTML document with the appropriate links to your JavaScript and CSS files.
 *  - Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.
 *  - Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
 *  - Set up a simple form that will let users input their location and will fetch the weather info (still just console.log() it).
 *  - Display the information on your webpage!
 *  - Add any styling you like!
 *  - Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.
 *  - Push that baby to github and share your solution below!
 *  API KEY: f5c2f7ddce129955c85c723e691eab9b
 */

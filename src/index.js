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
      const address = buildAddress(town);
      const response = await fetch(address, { mode: 'cors' });
      const weatherData = await response.json();
      return weatherData;
    } catch (err) {
      console.log(err);
    }
  },

  async parseWeather(town) {
    const data = await getWeather(town);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    return { name, icon, description, temp, humidity, speed };
  },
};

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

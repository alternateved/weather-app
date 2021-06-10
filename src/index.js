import './styles.css';

function buildAddress(town) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=f5c2f7ddce129955c85c723e691eab9b`;
}

async function getWeatherDescription(town) {
  try {
    const address = buildAddress(town);
    const response = await fetch(address, { mode: 'cors' });
    const weatherData = await response.json();
    const { weather } = weatherData;
    return weather[0].description;
  } catch (err) {
    console.log(err);
  }
}

// const newText = document.createElement('p');
// const container = document.querySelector('body');
// const targetTown = 'Lodz';
// const weatherPromise = getWeatherDescription(targetTown);
// weatherPromise.then(
//   (data) =>
//     (newText.textContent = `Current weather in ${targetTown} is ${data}.`),
// );
// container.append(newText);

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

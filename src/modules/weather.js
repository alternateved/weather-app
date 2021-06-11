const apiKey = 'f5c2f7ddce129955c85c723e691eab9b';

function buildAddress(town) {
  return (
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    town +
    '&units=metric&appid=' +
    apiKey
  );
}

async function getWeather(town) {
  try {
    const address = buildAddress(town);
    const response = await fetch(address, { mode: 'cors' });
    const weatherData = await response.json();
    return parseWeather(weatherData);
  } catch (err) {
    console.error(err);
  }
}

async function parseWeather(weather) {
  try {
    const data = await weather;
    const { name } = data;
    const { icon, main, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    return { name, icon, main, description, temp, humidity, speed };
  } catch (err) {
    console.error(err);
  }
}

export default getWeather;

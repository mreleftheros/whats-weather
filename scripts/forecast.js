const key = "9z7d1E0QZA81FYbJEuXhaZT4kINFeZbW";

// async function to fetch the city that was passed
const getCity = async (city, country) => {
  const urlBase = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const urlQuery = `?q=${city}&apikey=${key}`;

  const response = await fetch(urlBase + urlQuery);
  const data = await response.json();

  if (country) {
    return data.filter(city => city.Country.EnglishName.includes(country))[0];
  }
  
  return data[0];
};

// async function to fetch the weather of the given city key
const getWeather = async cityKey => {
  const urlBase = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
  const urlQuery = `?apikey=${key}`;

  const response = await fetch(urlBase + urlQuery);
  const data = await response.json();

  return data[0];
};

// async function that calls functions getCity and getWeather and retuns object with data
const updateCityAndWeather = async (cityInput, countryInput) => {
  const cityInfo = await getCity(cityInput, countryInput);
  const weatherInfo = await getWeather(cityInfo.Key);

  return {
    key: cityInfo.Key,
    city: cityInfo.EnglishName,
    country: cityInfo.Country.ID,
    area: cityInfo.AdministrativeArea.EnglishName,
    isDay: weatherInfo.IsDayTime,
    weather: weatherInfo.WeatherText,
    temperature: weatherInfo.Temperature.Metric.Value
  };
};
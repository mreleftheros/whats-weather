const key = "9z7d1E0QZA81FYbJEuXhaZT4kINFeZbW";

// async function to fetch the city that was passed
const getCity = async city => {
  const urlBase = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const urlQuery = `?q=${city}&apikey=${key}`;

  const response = await fetch(urlBase + urlQuery);
  const data = await response.json();

  return data[0];
};

// async function to fetch the weather of the given city key
const getWeather = async cityKey => {
  const urlBase = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
  const urlQuery = `?apikey=${key}`;

  const response = await fetch(urlBase + urlQuery);
  const data = await response.json();

  console.log(data);
};

getWeather(186405);
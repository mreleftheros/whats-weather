const key = "9z7d1E0QZA81FYbJEuXhaZT4kINFeZbW";

// async function to get city
const getCity = async city => {
  const urlBase = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const urlQuery = `?q=${city}&apikey=${key}`;

  const response = await fetch(urlBase + urlQuery);
  const data = await response.json();

  return data[0];
};
const cityForm = document.getElementById("cityForm");

// function that handles submit event on cityForm
const handleCityForm = e => {
  e.preventDefault();

  let cityInput = e.currentTarget.city.value.trim();

  updateCityAndWeather(cityInput);

  e.currentTarget.reset();
};

// event listeners
cityForm.addEventListener("submit", handleCityForm);
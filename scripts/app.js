const cityForm = document.getElementById("cityForm");
const cityCard = document.getElementById("cityCard");
const timeImg = document.getElementById("timeImg");

// function that updates the card UI with given data
const updateCardUI = data => {
  // update the image with day or night
  let imgSrc = data.isDay ? 

  let html = `

  `;
};

// function that handles submit event on cityForm
const handleCityForm = e => {
  e.preventDefault();

  let cityInput = e.currentTarget.city.value.trim();

  updateCityAndWeather(cityInput)
    .then(data => updateCardUI(data))
    .catch(err => console.log(err));

  e.currentTarget.reset();
};

// event listeners
cityForm.addEventListener("submit", handleCityForm);
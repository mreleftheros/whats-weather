const cityForm = document.getElementById("cityForm");
const card = document.getElementById("card");
const cardDetails = document.getElementById("cardDetails");
const timeImg = document.getElementById("timeImg");

// function that updates the card UI with given data
const updateCardUI = data => {

  // add class show to the card
  card.classList.add("show");
  
  setTimeout(() => {
    card.classList.add("transition");
  }, 300)

  // update the image with day or night
  let time = data.isDay ? "day" : "night";
  let imgSrc = `./assets/${time}.png`;
  timeImg.src = imgSrc;

  let html = `
    <h5 class="main__container__card__details__city">${data.city}</h5>
    <p class="main__container__card__details__area">${data.area}</p>
    <p class="main__container__card__details__country">${data.country}</p>
    <p class="main__container__card__details__weather">${data.weather}</p>
    <p class="main__container__card__details__temperature">${data.temperature} &deg;C</p>
  `;

  cardDetails.innerHTML = html;
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
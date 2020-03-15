const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event - modal
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  //Set location in Local Storage
  storage.setLocationData(city, country);

  //Get and display weather
  getWeather();

  //Close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.display(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}

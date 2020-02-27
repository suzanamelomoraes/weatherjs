const weather = new Weather("Auckland", "NZ");
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);

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

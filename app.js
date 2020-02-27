const weather = new Weather("Miami", "US");
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.display(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}

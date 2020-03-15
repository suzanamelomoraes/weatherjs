class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.country = document.getElementById("w-country");
    this.description = document.getElementById("w-description");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.temp = document.getElementById("w-temp");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  display(weather) {
    this.location.textContent = weather.name;
    this.country.textContent = weather.sys.country;
    this.description.textContent = `Description: ${weather.weather[0].description}`;
    this.string.textContent = weather.weather[0].main;
    this.icon.setAttribute("src", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.temp.textContent = `Temperature: ${weather.main.temp}`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;
    this.wind.textContent = `Wind: ${weather.wind.speed} km/h`;
  }
}

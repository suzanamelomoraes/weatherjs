class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.country = document.getElementById("w-country");
    this.string = document.getElementById("w-main-weather");
    this.temp = document.getElementById("w-temp");
    this.icon = document.getElementById("w-icon");
    this.description = document.getElementById("w-description");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  display(weather) {
    this.location.textContent = weather.name;
    this.country.textContent = weather.sys.country;
    this.string.textContent = weather.weather[0].main;
    this.temp.textContent = `Temperature: ${weather.main.temp} C`;
    this.icon.setAttribute("src", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.description.textContent = `Description: ${weather.weather[0].description}`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} C`;
    this.wind.textContent = `Wind: ${weather.wind.speed} km/h`;
  }
}

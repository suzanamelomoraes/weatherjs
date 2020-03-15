class Weather {
  constructor(city, country) {
    this.apiKey = "0ece4115e872d60560f7d279441d8691";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},{state},${this.country}&units=metric&appid=${this.apiKey}`
    );
    const respondeData = await response.json();

    return respondeData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

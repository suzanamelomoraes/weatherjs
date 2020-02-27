class Weather {
  constructor(city, state) {
    this.apiKey = "0ece4115e872d60560f7d279441d8691";
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );
    const respondeData = await response.json();

    return respondeData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}

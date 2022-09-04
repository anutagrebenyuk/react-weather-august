import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Paris");

  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coord,
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "7017d65a526be0558677d25fee70c883";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function showPosition() {
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    let apiKey = "7017d65a526be0558677d25fee70c883";
    let units = "metric";
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form
          onSubmit={handleSubmit}
          className="search-form Search"
          id="search-form"
        >
          <div className="row">
            <div className="col-6">
              <div className="input-group mb-3" id="enterCityForm">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter the city"
                  autoFocus="on"
                  autoComplete="off"
                  id="cityEntered"
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="col-auto">
              <input
                className="checkWeather"
                type="submit"
                value="Check weather"
              />
            </div>
            <div className="col-auto">
              <button className="btn-location" onClick={showPosition}>
                Current location
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

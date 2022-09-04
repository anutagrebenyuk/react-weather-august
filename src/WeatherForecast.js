import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "7017d65a526be0558677d25fee70c883";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Tue</div>
          <WeatherIcon code="01d" size={33} />
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">19</span>
            <span className="Forecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

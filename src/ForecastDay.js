import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  console.log(props);
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp} °`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp} °`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={33} />
      <div className="Forecast-temp">
        <span className="Forecast-temp-max">{maxTemp()}</span>
        <span className="Forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}

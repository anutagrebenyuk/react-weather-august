import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col icon">
          <div className="WeatherIcon">
            <WeatherIcon code={props.data.icon} size={70} />
          </div>
        </div>

        <div className="col-3">
          <WeatherTemperature celcius={props.data.temperature} />
        </div>

        <div className="col-3">
          <ul className="details">
            <li>
              Real feel:{" "}
              <span className="feels-like">
                {Math.round(props.data.feelsLike)}°C
              </span>{" "}
            </li>
            <li>
              <i className="fa-solid fa-umbrella"></i> Humidity:{" "}
              {props.data.humidity}
              <span className="humidity"></span>%
            </li>
            <li>
              <i className="fa-solid fa-wind"></i> Wind: {props.data.wind}
              <span className="wind"></span> km/h
            </li>
            <li>
              <i className="fa-solid fa-rainbow"></i>
              <span className="description"> {props.data.description}</span>
            </li>
          </ul>
        </div>

        <div className="col-4 main-info">
          <h2 className="city">{props.data.city}</h2>
          <h3 className="curr-date">
            <FormattedDate date={props.data.date} />
          </h3>
        </div>
      </div>
    </div>
  );
}

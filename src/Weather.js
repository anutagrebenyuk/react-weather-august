import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-2">
          <img src="/" alt="" id="icon" className="float-left" />
        </div>

        <div className="col-3">
          <span id="temperature">19</span>
          <span className="units">
            <a href="/" id="celsius-link" className="active">
              °C
            </a>
            |
            <a href="/" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>

        <div className="col-3">
          <ul className="details">
            <li>
              Real feel: <span id="feels-like"></span> 25°
            </li>
            <li>
              <i className="fa-solid fa-umbrella"></i> Humidity: 80
              <span id="humidity"></span>%
            </li>
            <li>
              <i className="fa-solid fa-wind"></i> Wind: 30
              <span id="wind"></span> km/h
            </li>
            <li>
              <i className="fa-solid fa-rainbow"></i>
              <span id="description"> Clouds</span>
            </li>
          </ul>
        </div>

        <div className="col-4" id="main-info">
          <h2 id="city">Kyiv</h2>
          <h3 id="curr-date">Monday, 27 June 2022</h3>
        </div>
      </div>
    </div>
  );
}

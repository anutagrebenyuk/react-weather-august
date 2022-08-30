import React from "react";
import "./SearchStyle.css";

export default function Search() {
  return (
    <form className="search-form Search" id="search-form">
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
            />
          </div>
        </div>
        <div className="col-auto">
          <input
            className="form-control btn-weather checkWeather"
            type="submit"
            value="Check weather"
          />
        </div>
        <div className="col-auto">
          <button className="btn-location">Current location</button>
        </div>
      </div>
    </form>
  );
}

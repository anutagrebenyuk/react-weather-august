import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container card">
        <Weather />

        <br />
        <div className="forecast-container" id="forecast"></div>
        <footer>
          This is an{" "}
          <a
            href="https://github.com/anutagrebenyuk/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>{" "}
          code by Hanna Hrebeniuk
        </footer>
      </div>
    </div>
  );
}

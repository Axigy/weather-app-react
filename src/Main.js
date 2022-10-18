import React from "react";
import "./App.css";

export default function Main(prop) {
  if (prop) {
    return (
      <main className="overview">
        <div className="overviewRow">
          <img src={prop.forecast.icon} alt="weather icon" />
          <ul>
            <li>Last update: </li>
            <li>{prop.forecast.description}</li>
          </ul>
        </div>
        <div className="overviewRow">
          <h5 className="currentTemp">
            <span id="temp-value">{Math.round(prop.forecast.temp)}</span>
            <span className="degreesIcon">°C</span>
          </h5>

          <ul className="row_col_card-text">
            <li>
              Wind:{" "}
              <span id="wind-speed">{Math.round(prop.forecast.wind)}</span> m/H{" "}
            </li>
            <li>
              Humidity:{" "}
              <span id="humidity">{Math.round(prop.forecast.humidity)}</span>%{" "}
            </li>
          </ul>
        </div>
      </main>
    );
  } else {
    return "Please, input your city...";
  }
}

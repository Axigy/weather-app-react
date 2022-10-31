import React from "react";
import "./App.css";
import FormateDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";

export default function Main(prop) {
  if (prop) {
    return (
      <main className="overview container">
        <div className="overviewRow row">
          <div className="col-md-5">
            {<WeatherIcon code={prop.data.icon} />}

            <ul>
              <li>
                <FormateDate date={prop.data.date} />
              </li>
              <li>{prop.data.description}</li>
            </ul>
          </div>

          <div className="overviewRow col-md-3">
            <h5 className="currentTemp mt-1">
              <span id="temp-value">{Math.round(prop.data.temp)}</span>
              <span className="degreesIcon">°C</span>
            </h5>
          </div>
          <div className="overviewRow col-md-4 mt-5">
            <ul className="row_col_card-text ">
              <li>
                Wind: <span id="wind-speed">{Math.round(prop.data.wind)}</span>{" "}
                m/H{" "}
              </li>
              <li>
                Humidity:{" "}
                <span id="humidity">{Math.round(prop.data.humidity)}</span>%{" "}
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  } else {
    return "Please, input your city...";
  }
}

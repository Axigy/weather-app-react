import React from "react";
import "./App.css";
import FormateDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

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
            <CurrentTemperature celsiusTemp={prop.data.temp} />
          </div>
          <div className="overviewRow col-md-4 mt-4">
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

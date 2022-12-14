import React from "react";
import "./App.css";
import FormateDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";
import DailyForecast from "./DailyForecast";

export default function Main(prop) {
  if (prop) {
    return (
      <main className="overview container">
        <div className="overviewRow row">
          <div className="col-md-5">
            {<WeatherIcon code={prop.data.icon} size={80} />}

            <div>
              <FormateDate date={prop.data.date} />
              <div>{prop.data.description}</div>
            </div>
          </div>

          <div className="overviewRow col-md-3">
            <CurrentTemperature celsiusTemp={prop.data.temp} />
          </div>
          <div className="overviewRow col-md-4 ">
            <ul className="row_col_card-text mt-4 ">
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
        <DailyForecast city={prop.data.name} />
      </main>
    );
  } else {
    return "Please, input your city...";
  }
}

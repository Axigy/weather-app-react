import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Main(prop) {
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(resp) {
    console.log(resp.data);
    setWeather({
      temp: resp.data.main.temp,
      wind: resp.data.wind.speed,
      humidity: resp.data.main.humidity,
      description: resp.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${resp.data.weather[0].icon}@2x.png`,
    });
  }

  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${prop.city}&units=metric&appid=920ae924ef286b04c010bf50d5e7861f`;
  axios.get(urlApi).then(showWeather);

  if (prop.city) {
    return (
      <main className="overview">
        <div className="overviewRow">
          <img src={weather.icon} alt="weather icon" />
          <ul>
            <li>Last update: </li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="overviewRow">
          <h5 className="currentTemp">
            <span id="temp-value">{Math.round(weather.temp)}</span>
            <span className="degreesIcon">°C</span>
          </h5>

          <ul className="row_col_card-text">
            <li>
              Wind: <span id="wind-speed">{Math.round(weather.wind)}</span> m/H{" "}
            </li>
            <li>
              Humidity:{" "}
              <span id="humidity">{Math.round(weather.humidity)}</span>%{" "}
            </li>
          </ul>
        </div>
      </main>
    );
  } else {
    return "Please, input your city...";
  }
}

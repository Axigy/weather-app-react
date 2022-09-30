import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Main(prop) {
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [desc, setDesc] = useState();
  const [icon, seticon] = useState();
  const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  function showWeather(resp) {
    setTemp(resp.data.main.temp);
    setHumidity(resp.data.main.humidity);
    setWind(resp.data.wind.speed);
    setDesc(resp.data.weather[0].description);
    seticon(resp.data.weather[0].icon);
    console.log(resp);
  }

  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${prop.city}&units=metric&appid=920ae924ef286b04c010bf50d5e7861f`;
  axios.get(urlApi).then(showWeather);

  let forecast = {
    date: "05.09.2022",
    wind: "2",
    humidity: "15",
  };
  if (prop.city) {
    return (
      <main className="overview">
        <div className="overviewRow">
          <img src={iconLink} alt="weather icon" />
          <ul>
            <li>Last update: {forecast.date}</li>
            <li>{desc}</li>
          </ul>
        </div>
        <div className="overviewRow">
          <h5 className="currentTemp">
            <span id="temp-value">{Math.round(temp)}</span>
            <span className="degreesIcon">°C</span>
          </h5>

          <ul className="row_col_card-text">
            <li>
              Wind: <span id="wind-speed">{wind}</span> m/H{" "}
            </li>
            <li>
              Humidity: <span id="humidity">{Math.round(humidity)}</span>%{" "}
            </li>
          </ul>
        </div>
      </main>
    );
  } else {
    return "Please, input your city...";
  }
}

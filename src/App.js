import React, { useState } from "react";
import "./App.css";
import Main from "./Main";
import axios from "axios";

function App() {
  const [city, setCity] = useState("New York");
  const [h1, setH1] = useState(`Today in ${city}`);
  const [weather, setWeather] = useState({ ready: false });

  function showCityTemperature(e) {
    e.preventDefault();
    search();
    if (city) {
      setH1(`Today in ${city}`);
    } else {
      setH1(`Input your location`);
    }
  }
  function addCity(e) {
    setCity(e.target.value);
  }

  function showData(resp) {
    console.log(resp.data);
    setWeather({
      temp: resp.data.main.temp,
      wind: resp.data.wind.speed,
      humidity: resp.data.main.humidity,
      description: resp.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${resp.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=64e8bf8bdd085388ddf709fb1376b4fe`;
    axios.get(urlApi).then(showData);
  }
  return (
    <div className="Attic">
      <div className="container">
        <div className="row attic-line">
          <div className="col-3">
            <a href="/" id="change-to-celsius" className="active">
              {" "}
              °C{" "}
            </a>
            <a href="/" id="change-to-fahrenheit">
              {" "}
              °F{" "}
            </a>
          </div>

          <div className="col-9">
            <form
              className="search_form"
              id="search-city-form"
              onSubmit={showCityTemperature}
            >
              <input
                type="text"
                placeholder="Enter your city"
                id="input-city"
                autoComplete="on"
                onChange={addCity}
              />
              <input type="submit" value="Search" className="search_button" />
            </form>
          </div>

          <h3>{h1}</h3>
        </div>
      </div>
      <Main forecast={weather} />
    </div>
  );
}

export default App;

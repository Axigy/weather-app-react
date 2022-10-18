import React, { useState } from "react";
import "./App.css";
import Main from "./Main";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState({ ready: false });
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=64e8bf8bdd085388ddf709fb1376b4fe`;

  function showCityTemperature(e) {
    e.preventDefault();
    search();
  }
  function addCity(e) {
    setCity(e.target.value);
  }

  function showData(resp) {
    console.log(resp);
    setWeather({
      temp: resp.data.main.temp,
      wind: resp.data.wind.speed,
      humidity: resp.data.main.humidity,
      description: resp.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${resp.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    axios.get(urlApi).then(showData);
  }
  if (city) {
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

            <h3>Today in {city}</h3>
          </div>
        </div>
        <Main forecast={weather} />
      </div>
    );
  } else {
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
          </div>
          <h3 className="main-invitation">
            Enter your location
            <span>
              <Loading type="bubbles" color="#71ac98" />{" "}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default App;

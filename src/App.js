import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Main from "./Main";

function App() {
  let [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("London");
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=64e8bf8bdd085388ddf709fb1376b4fe`;
  function showCityTemperature(e) {
    e.preventDefault();
    search();
  }

  useEffect(() => {
    setLoaded(false);
  }, [city]);

  function showData(resp) {
    setLoaded(true);
    setWeather({
      name: resp.data.name,
      temp: resp.data.main.temp,
      wind: resp.data.wind.speed,
      humidity: resp.data.main.humidity,
      date: resp.data.dt,
      description: resp.data.weather[0].description,
      icon: resp.data.weather[0].icon,
    });
  }
  function addCity(e) {
    setCity(e.target.value);
  }
  function search() {
    axios.get(urlApi).then(showData);
  }
  if (loaded) {
    return (
      <div className="Attic container">
        <div className="row attic-line">
          <div className="d-flex justify-content-center">
            <form
              className="search_form"
              id="search-city-form"
              onSubmit={showCityTemperature}
            >
              <input
                className="p-1 px-2"
                type="text"
                placeholder="Enter your city"
                id="input-city"
                autoComplete="off"
                onChange={addCity}
              />
              <input type="submit" value="Search" className="search_button" />
            </form>
          </div>
        </div>
        <Main data={weather} />
      </div>
    );
  } else {
    return (
      <div className="Attic container">
        <div className="row attic-line">
          <div className="d-flex justify-content-center">
            <form
              className="search_form"
              id="search-city-form"
              onSubmit={showCityTemperature}
            >
              <input
                className="p-1 px-2"
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
        <h3 className="main-invitation">Enter your location</h3>
      </div>
    );
  }
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Main from "./Main";

function App() {
  const [city, setCity] = useState("New York");
  const [h1, setH1] = useState(`Today in ${city}`);

  function showCityTemperature(e) {
    e.preventDefault();

    if (city) {
      setH1(`Today in ${city}`);
    } else {
      setH1(`Input your location`);
    }
  }
  function addCity(e) {
    setCity(e.target.value);
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
      <Main city={city} />
    </div>
  );
}

export default App;

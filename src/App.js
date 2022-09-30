import React, { useState } from "react";
import "./App.css";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [city, setCity] = useState();
  const [h1, setH1] = useState();

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
      <div>
        <a href="/" id="change-to-celsius" className="active">
          {" "}
          °C{" "}
        </a>
        <a href="/" id="change-to-fahrenheit">
          {" "}
          °F{" "}
        </a>
      </div>
      <div>
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
            value={city}
            onChange={addCity}
          />
          <input type="submit" value="Search" className="search_button" />
        </form>
        <h3>{h1}</h3>
      </div>
      <Main city={city} />
      <Footer />
    </div>
  );
}

export default App;

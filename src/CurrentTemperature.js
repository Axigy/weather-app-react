import React, { useState } from "react";

export default function CurrentTemperature(prop) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <h5 className="currentTemp mt-1">
        <span id="temp-value">{Math.round(prop.celsiusTemp)}</span>
        <span className="degreesIcon">
          °C |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </h5>
    );
  } else {
    let fahrenheit = (prop.celsiusTemp * 9) / 5 + 32;
    return (
      <h5 className="currentTemp mt-1">
        <span id="temp-value">{Math.round(fahrenheit)}</span>
        <span className="degreesIcon">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </h5>
    );
  }
}

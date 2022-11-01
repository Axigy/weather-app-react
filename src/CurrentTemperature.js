import React, { useState } from "react";

export default function CurrentTemperature(prop) {
  return (
    <h5 className="currentTemp mt-1">
      <span id="temp-value">{Math.round(prop.celsiusTemp)}</span>
      <span className="degreesIcon">°C</span>
    </h5>
  );
}

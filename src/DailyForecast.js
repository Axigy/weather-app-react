import React, { useState } from "react";
import axios from "axios";
import Weathericon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  const keyApi = "ta06aa0d83ff25ab34df62b33bed5oe8";
  const urlApi = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${keyApi}`;
  let [forecast, setForecast] = useState({ ready: false });

  function showDailyForecast(resp) {
    console.log(resp.data);
  }

  axios(urlApi).then(showDailyForecast);

  return (
    <div className="WeatherForecast container">
      <div className="row">
        <div className="col-md-2">
          <div className="forecast-day"> Thu</div>
          {<Weathericon code="01d" size={40} />}
          <div className="forecast-temperature">
            <span className="forecast-temperature-max font-weight-bold">
              19
            </span>{" "}
            <span className="forecast-temperature-min opacity-75">16</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import DailyForecastbyDay from "./DailyForecastbyDay";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showDailyForecast(resp) {
    console.log(resp.data);
    setLoaded(true);
    setForecast(resp.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast container">
        <div className="row justify-content-sm-center">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-sm-2" key={index}>
                  <DailyForecastbyDay forecast={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const keyApi = "ta06aa0d83ff25ab34df62b33bed5oe8";
    const urlApi = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${keyApi}`;
    axios(urlApi).then(showDailyForecast);
  }
}

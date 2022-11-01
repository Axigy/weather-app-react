import React from "react";
import Weathericon from "./WeatherIcon";
import DayOfWeek from "./DayOfWeek";

export default function DailyForecastbyDay(prop) {
  let weather = {
    min_temp: prop.forecast.temperature.minimum,
    max_temp: prop.forecast.temperature.maximum,
    time: prop.forecast.time,
    code: prop.forecast.condition.icon,
  };
  if (prop.forecast) {
    return (
      <div>
        {<DayOfWeek date={weather.time} />}

        {<Weathericon code={weather.code} size={40} />}
        <div className="forecast-temperature">
          <span className="forecast-temperature-max font-weight-bold">
            {Math.round(weather.max_temp)}°
          </span>{" "}
          <span className="forecast-temperature-min opacity-75">
            {Math.round(weather.min_temp)}°
          </span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

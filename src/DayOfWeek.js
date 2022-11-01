import React from "react";

export default function DayOfWeek(prop) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(prop.date * 1000);
  let day = days[date.getDay()];
  return <div className="forecast-day">{day}</div>;
}

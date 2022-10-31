import React from "react";

export default function FormateDate(prop) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(prop.date * 1000);
  let hours = date.getHours();
  let day = days[date.getDay()];
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <li>
      {day} {hours}:{minutes}
    </li>
  );
}

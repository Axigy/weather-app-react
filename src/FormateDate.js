import React from "react";

export default function FormateDate(prop) {
  console.log(prop.date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  let day = days[prop.date.getDay()];
  let hour = prop.date.getHours();
  let minutes = prop.date.getMinutes();
  return (
    <li>
      {day} {hour}:{minutes}
    </li>
  );
}

import React from "react";
import "./App.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let date = props.date.getDate();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="FormattedDate">
      <div className="date">
        <p>
          {day}, {hours}:{minutes}
        </p>
        {date} {month}, {year}
      </div>
    </div>
  );
}

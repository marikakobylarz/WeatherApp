import React from "react";
import "./App.css";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import cloudy from "../images/cloudy.png";
import cloud from "../images/cloud.png";
import clouds from "../images/clouds.png";
import rain from "../images/rain.png";
import rain1 from "../images/rain1.png";
import rain2 from "../images/rain2.png";
import storm from "../images/storm.png";
import snow from "../images/snow.png";
import mist from "../images/mist.png";

const Result = props => {
  const {
    date,
    day,
    city,
    sunrise,
    sunset,
    temp,
    minTemp,
    maxTemp,
    pressure,
    wind,
    err,
    country,
    icon
  } = props.weather;

  let content = null;
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const cityName = city.toLowerCase();

    let dayName;
    switch (day) {
      case 0:
        dayName = "niedziela";
        break;
      case 1:
        dayName = "poniedziałek";
        break;
      case 2:
        dayName = "wtorek";
        break;
      case 3:
        dayName = "środa";
        break;
      case 4:
        dayName = "czawartek";
        break;
      case 5:
        dayName = "piątek";
        break;
      case 6:
        dayName = "sobota";
        break;
      default:
        dayName = "";
    }
    let background;
    switch (icon) {
      case "01d":
        background = sun;
        break;
      case "01n":
        background = moon;
        break;
      case "02d":
        background = cloudy;
        break;
      case "02n":
        background = cloud;
        break;
      case "03d":
        background = cloud;
        break;
      case "03n":
        background = cloud;
        break;
      case "04d":
        background = clouds;
        break;
      case "04n":
        background = clouds;
        break;
      case "09d":
        background = rain;
        break;
      case "09n":
        background = rain;
        break;
      case "10d":
        background = rain1;
        break;
      case "10n":
        background = rain2;
        break;
      case "11n":
        background = storm;
        break;
      case "11d":
        background = storm;
        break;
      case "13d":
        background = snow;
        break;
      case "13n":
        background = snow;
        break;
      case "50n":
        background = mist;
        break;
      case "50d":
        background = mist;
        break;
      default:
        background = "";
    }
    console.log(icon);
    content = (
      <>
        <h2 className="date">
          {" "}
          {dayName}, {date}{" "}
        </h2>
        <div
          className="icon"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="temp">
          <div className="temp__minmax">
            {minTemp}
            <span>o</span>C
          </div>
          <div className="temp__temp">
            {temp !== 0 ? temp : Math.abs(temp)}
            <span>o</span>
          </div>
          <div className="temp__minmax">
            {maxTemp}
            <span>o</span>C
          </div>
        </div>
        <h1>
          {cityName}, {country}
        </h1>
        <div className="param">
          <h2>Wschód słońca: {sunriseTime}</h2>
          <h2>Zachód słońca: {sunsetTime}</h2>
          <h2>Ciśnienie: {pressure} hPa</h2>
          <h2>Siła wiatru: {((wind * 3600) / 1000).toFixed()} km/h</h2>
        </div>
      </>
    );
  }

  return <div className="result">{err ? `Brak miasta ${city}` : content}</div>;
};

export default Result;

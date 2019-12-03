import React from 'react';
import './App.css';


const Result = props => {
    const { date, day, city, sunrise, sunset, temp, minTemp, maxTemp, pressure, wind, err, country } = props.weather;


    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

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

        content = (

            <>
                <h2 className="date">{date}, {dayName}</h2>

                <div className="temp">
                    <div className="temp__minmax" style={{ color: "cadetblue" }}>{minTemp}<sup>&#8451;</sup></div>
                    <div className="temp__temp">{temp}<sup>&#8451;</sup></div>
                    <div className="temp__minmax" style={{ color: "red" }}>{maxTemp}<sup>&#8451;</sup></div>
                </div>
                <h1>{city}, {country}</h1>
                <div className="param">
                    <h2>Wschód słońca: {sunriseTime}</h2>
                    <h2>Zachód słońca: {sunsetTime}</h2>
                    <h2>Ciśnienie: {pressure} hPa</h2>
                    <h2>Siła wiatru: {wind} km/h</h2></div>

            </>
        )
    }
    return (
        <div className="result">
            {err ? `Brak miasta ${city}` : content}
        </div>
    );
}

export default Result;
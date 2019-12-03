import React from 'react';
import './App.css';


const Result = props => {
    const { date, day, city, sunrise, sunset, temp, minTemp, maxTemp, pressure, wind, err, country } = props.weather;


    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

        content = (

            <>
                <h2 className="date">{date}, {day}</h2>

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
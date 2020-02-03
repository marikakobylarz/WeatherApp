import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const APIkey = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  state = {
    value: "",
    city: "",
    country: "",
    date: "",
    day: "",
    temp: "",
    minTemp: "",
    maxTemp: "",
    sunrise: "",
    sunset: "",
    pressure: "",
    wind: "",
    err: "",
    icon: ""
  };

  handleImputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value.trim()}&APPID=${APIkey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Coś poszło nie tak..");
      })
      .then(response => response.json())
      .then(data => {
        const date = new Date().toLocaleDateString(undefined, {
          month: "long",
          day: "numeric"
        });
        const day = new Date().getDay();

        this.setState(prevState => ({
          city: prevState.value,
          country: data.sys.country,
          day: day,
          date: date,
          temp: data.main.temp.toFixed(),
          minTemp: data.main.temp_min.toFixed(),
          maxTemp: data.main.temp_max.toFixed(),
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          icon: data.weather[0].icon,
          err: false,
          value: ""
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleImputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;

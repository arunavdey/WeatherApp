import React, { useState, useEffect } from "react";
import axios from "axios";
import Graph from "./Graph";
import Info from "./Info";

// Global Variables
const API_KEY = process.env.REACT_APP_API_KEY;
var isToggled= false;

export default function ResultPage(props) {
  const [status, setStatus] = useState(0);
  const [response, setResponse] = useState({});
  const [unit, setUnit] = useState('metric');

  function handleToggle(){
    isToggled = !isToggled;

    if(isToggled){
      setUnit('imperial');
    }

    else
      setUnit('metric');
  }

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          props.cityName +
          "&appid=" +
          API_KEY +
          "&units=" +
          unit
      )
      .then((response) => {
        setStatus(response.status);
        setResponse(response.data);
      })
      .catch((err) => {
        setStatus(err.response.status);
      });
  }, [props.cityName, unit]);

  if (status === 200) {
    return (
      <div className="result-container">
        <div className="result-heading">
          <a className="gb-button" href="/">
            <img alt="gb" className="gb-image" src="icons/arrow_back.png" />
          </a>
          <h1>WeatherMan</h1>
          <div>
            <input type="checkbox" className="checkbox" id = "toggle" defaultChecked = {isToggled} onClick = {handleToggle}/>
            <label htmlFor="toggle" className="label-slider">
              <div className="ball" />
            </label>
          </div>
        </div>
        <Info response={response} unit={unit}/>

        <Graph />
      </div>
    );
  } else if (status === 404) {
    return (
      <div className="result-container">
        <div className="result-heading">
          <a className="gb-button" href="/">
            <img alt="gb" className="gb-image" src="icons/arrow_back.png" />
          </a>
          <h1>WeatherMan</h1>
        </div>
        <h1 className="city">City not found</h1>
      </div>
    );
  } else {
    return (
      <div className="result-container">
        <div className="result-heading">
          <a className="gb-button" href="/">
            <img alt="gb" className="gb-image" src="icons/arrow_back.png" />
          </a>
          <h1>WeatherMan</h1>
        </div>
      </div>
    );
  }
}

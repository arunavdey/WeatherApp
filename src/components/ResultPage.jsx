import React, { useState, useEffect } from "react";
import axios from "axios";
import Graph from "./Graph";
import Info from "./Info";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function ResultPage(props) {
  const [res, setRes] = useState(0);
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          props.cityName +
          "&appid=" +
          API_KEY +
          "&units=" +
          "metric"
      )
      .then((response) => {
        setRes(response.status);
        setResponse(response.data);
      })
      .catch((err) => {
        setRes(err.response.status);
      });
  }, [props.cityName, res]);

  if (res === 200) {
    return (
      <div className="result-container">
        <div className="result-heading">
          <a className="gb-button" href="/">
            <img alt="gb" className="gb-image" src="icons/arrow_back.png" />
          </a>
          <h1>WeatherMan</h1>
          <div>
            <input type="checkbox" className="checkbox" id = "toggle" on/>
            <label htmlFor="toggle" className="label">
              <div className="ball" />
            </label>
          </div>
        </div>
        <Info response={response} />

        <Graph />
      </div>
    );
  } else if (res === 404) {
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

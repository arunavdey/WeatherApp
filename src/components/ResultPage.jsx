import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import "./ResultPage.css";

export default function ResultPage(props) {
  const [res, setRes] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          props.cityName +
          "&appid=" +
          "aac0e38a5a3c567cd3e79a723bf39fc3"
      )
      .then((response) => {
        setRes(response.status);
      })
      .catch((err) => {
        setRes(err.response.status);
      });
  }, [res]);

  if (res == 200) {
  return (
    <div>
      <h1 className="result">{props.cityName}</h1>
    </div>
  );

  } else {
  return (
    <div>
      <h1 className="result">City not found</h1>
    </div>
  );
    
  }
}

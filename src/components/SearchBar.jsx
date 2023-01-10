import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import "../components/SearchBar.css";

export default function SearchBar(props) {
  const [inputData, setInputData] = useState("");
  const [city, setCity] = useState(getLocalItems);
  const navigate = useNavigate();

  function getLocalItems() {
    let list = localStorage.getItem("lists");
    console.log(list);

    if (list) {
      // console.log(JSON.parse(localStorage.getItem('lists')));
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  }

  function handleSearch() {
    if (inputData) {
      localStorage.setItem("lists", JSON.stringify([...city, inputData]));
      setCity([...city, inputData]);
      // props.setCityName(inputData)
      setInputData("");
      navigate("/results");
    }
  }

  // useEffect(() => {
  //   localStorage.setItem('lists', JSON.stringify(city))
  // }, [city]);

  return (
    <div className="search">
      <div className="search-input">
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          // value={inputData}
          // onChange={(e) => setInputData(e.target.value) }
          style={{ width: "50%" }}
          disableClearable
          options={city.reverse()}
          renderInput={(params) => (
            <TextField
              {...params}
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
                props.setCityName(e.target.value);
              }}
              label="Enter city name"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

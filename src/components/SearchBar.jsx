import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar(props) {
  const [inputData, setInputData] = useState("");
  const [city, setCity] = useState(getLocalItems);
  const navigate = useNavigate();

  // retrieves the search history from localStorage
  function getLocalItems() {
    let list = localStorage.getItem("lists");
    console.log(list);

    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  }

  // adds the searched city to the localStorage
  function handleSearch() {
    if (inputData) {
      console.log(typeof inputData);
      let idx = city.indexOf(inputData);
      if (idx === -1) {
        localStorage.setItem(
          "lists",
          JSON.stringify([...city, inputData.toLowerCase()])
        );
        setCity([...city, inputData.toLowerCase()]);
      } else {
        city.splice(idx, 1);
        localStorage.setItem(
          "lists",
          JSON.stringify([...city, inputData.toLowerCase()])
        );
        setCity([...city, inputData.toLowerCase()]);
      }
      setInputData("");
      navigate("/results");
    }
  }

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(city));
  }, []);

  return (
    <div className="search">
      <div className="search-input">
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          style={{ width: "80%", borderColor: "white" }}
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
              onKeyDown={(e) => {
                if(e.key === 'Enter') 
                handleSearch()
              }}
            />
          )}
          onChange={(e) => {
            setInputData(e.target.innerText);
            props.setCityName(e.target.innerText);
          }}
        />

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

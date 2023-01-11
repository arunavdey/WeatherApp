import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import ResultPage from "./ResultPage";
// import "font-awesome/css/font-awesome-min.css";

function Header() {
  const [cityName, setCityName] = useState("");
  return (
    <div class="container">
      <div class="landing-page-container">
        <div class="content__wrapper">
          <header>
            <div class="subheading">
            </div>
          </header>

          <div class="weathercontainer">
            <h1 class="heading">
              WeatherMan
            </h1>
            
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={<SearchBar setCityName={setCityName} />}
                ></Route>
                <Route
                  exact
                  path="/results"
                  element={<ResultPage cityName={cityName} />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

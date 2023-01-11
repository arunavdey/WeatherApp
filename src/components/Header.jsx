import { React, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ResultPage from "./ResultPage";

function Header() {
  const [cityName, setCityName] = useState("");
  return (
      <div class="container">
        <div class="landing-page-container">
          <div class="content__wrapper">
            <header>
                <span class="menu-icon__line"></span>
              <h1 class="heading">Whether APP</h1>
              <div class="subheading">
              <a href="/search">
                <h1 class="a_button">Search</h1>
              </a>
              <a href="/results">
                <h1 class="a_button">Result</h1>
              </a>
              </div>
            </header>
            <p class="coords">N 49° 16' 35.173"  /  W 0° 42' 11.30"</p>
            
            <div class="weathercontainer">
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/search"
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

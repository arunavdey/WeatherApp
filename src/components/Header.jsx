import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import ResultPage from "./ResultPage";
// import "font-awesome/css/font-awesome-min.css";

function Header() {
  const [cityName, setCityName] = useState("");
  return (
    <div class="weathercontainer">
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
  );
}

export default Header;

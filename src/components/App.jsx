import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import ResultPage from "./ResultPage";


function App() {
  const [cityName, setCityName] = useState("");  
  return (
    <div className="weathercontainer">
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

export default App;

import React from "react";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
// import { Link } from 'react-router';
import SearchBar from "./SearchBar"
import ResultPage from "./ResultPage"

function Header() {
  return (
    <div>
    <header>
      <h1>This is the nav bar </h1>
    </header>

      <a href='/search'><h1>Search</h1></a>
        <a href='/results'><h1>Result</h1></a>

      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchBar />}></Route>
          <Route exact path="/results" element={<ResultPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Header;
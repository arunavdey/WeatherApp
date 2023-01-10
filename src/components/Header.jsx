import {React,useState} from "react";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
// import { Link } from 'react-router';
import SearchBar from "./SearchBar"
import ResultPage from "./ResultPage"
import "../components/Header.css"

function Header() {
  const [cityName,setCityName]=useState("")
  return (
    <div>
    <header>
      <h1>This is the nav bar </h1>
    </header>
    <div className="nav-tabs">
      <a href='/search'><h1>Search</h1></a>
      <a href='/results'><h1>Result</h1></a>
    </div>
        <BrowserRouter>
          <Routes>
            <Route path="/search" element={<SearchBar setCityName={setCityName}/>}></Route>
            <Route exact path="/results" element={<ResultPage cityName={cityName}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  
  );
}

export default Header;
import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
// import { Link } from 'react-router';
import SearchPage from "./SearchPage"
import ResultPage from "./ResultPage"


function App() {
  return (
    <div>
      <div className='navbar'>
        <a href='/search'><h1>Search</h1></a>
        <a href='/results'><h1>Result</h1></a>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/search" element={SearchPage}></Route>
          <Route path="/results" element={ResultPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

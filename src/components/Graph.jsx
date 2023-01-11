import React from "react";

function Graph(props) {
  return (
    <div>
      <h1>Graph</h1>
      <h1 className="city">{props.cityName}</h1>
    </div>
  );
}

export default Graph;

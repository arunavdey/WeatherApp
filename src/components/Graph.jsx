import React from "react";
import Chart from "chart.js/auto";

function Graph(props) {
  let graphInput = [
    { x: "2/12/2022 20:31", y: 18.41 },
    { x: "3/12/2022 20:31", y: 17.64 },
    { x: "4/12/2022 20:31", y: 24.75 },
    { x: "5/12/2022 20:31", y: 20.99 },
    { x: "6/12/2022 20:31", y: 21.5 },
    { x: "7/12/2022 20:31", y: 17.49 },
    { x: "8/12/2022 20:31", y: 17.6 },
    { x: "9/12/2022 20:31", y: 18.97 },
    { x: "10/12/2022 20:31", y: 22.14 },
    { x: "11/12/2022 20:31", y: 21.15 },
    { x: "12/12/2022 20:31", y: 23.22 },
    { x: "13/12/2022 20:31", y: 24.44 },
    { x: "14/12/2022 20:31", y: 18.5 },
    { x: "15/12/2022 20:31", y: 24.48 },
    { x: "16/12/2022 20:31", y: 19.15 },
    { x: "17/12/2022 20:31", y: 19.44 },
    { x: "18/12/2022 20:31", y: 19.32 },
    { x: "19/12/2022 20:31", y: 19.53 },
    { x: "20/12/2022 20:31", y: 21.67 },
    { x: "21/12/2022 20:31", y: 15.29 },
    { x: "22/12/2022 20:31", y: 19.67 },
    { x: "23/12/2022 20:31", y: 17.43 },
    { x: "24/12/2022 20:31", y: 15.76 },
    { x: "25/12/2022 20:31", y: 23.59 },
    { x: "26/12/2022 20:31", y: 20.45 },
    { x: "27/12/2022 20:31", y: 20.76 },
    { x: "28/12/2022 20:31", y: 18.52 },
    { x: "29/12/2022 20:31", y: 23.83 },
    { x: "30/12/2022 20:31", y: 22.37 },
    { x: "31/12/2022 20:31", y: 16.06 },
    { x: "1/1/2023 20:31", y: 21.08 },
    { x: "2/1/2023 20:31", y: 21.96 },
    { x: "3/1/2023 20:31", y: 23.09 },
    { x: "4/1/2023 20:31", y: 20.92 },
    { x: "5/1/2023 20:31", y: 21.31 },
    { x: "6/1/2023 20:31", y: 22.62 },
    { x: "7/1/2023 20:31", y: 16.96 },
    { x: "8/1/2023 20:31", y: 20.78 },
    { x: "9/1/2023 20:31", y: 22.35 },
    { x: "10/1/2023 20:31", y: 12.47 },
  ];

  // function that generates chart given input such as in above format
  function generateChart(graphInput) {
    const plugin = {
      id: 'customCanvasBackgroundColor',
      beforeDraw: (chart, args, options) => {
        const {ctx} = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#99ffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };
    new Chart(document.getElementById("myChart"), {
      type: "line",
      data: {
        datasets: [
          {
            label: "Temperature",
            data: graphInput,
            borderColor: "#1d2021",
            backgroundColor: "#1d2021",
            borderWidth: 3,
          },
        ],
      },
      options: {
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
          customCanvasBackgroundColor: {
            color: "#fbf1c7",
          },
        },
      },
      plugins: [plugin],
    });
  }

  return (
    <div>
      <canvas id="myChart" className="graph">
        {" "}
      </canvas>
      {generateChart(graphInput)}
    </div>
  );
}

export default Graph;

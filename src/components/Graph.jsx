import React, { useState ,useEffect } from "react";
import Chart from "chart.js/auto";
import DatePicker from "react-date-picker";

// Global Variables
var graphInput = [];
const number_of_days = 30;

function Graph() {
  graphInputGenerator(new Date())

  var start_date = new Date();
  start_date.setDate(start_date.getDate() - number_of_days + 1);

  const [userStartDate, setUserStartDate] = useState(start_date);
  const [userEndDate, setUserEndDate] = useState(new Date());

    useEffect(()=>{
      const one_day = 1000*60*60*24;

      let start_index = Math.ceil((userStartDate.getTime() - start_date.getTime())/(one_day));
      let end_index = Math.floor(((new Date()).getTime() - userEndDate.getTime())/(one_day));

      if(start_index >= number_of_days)
        start_index = number_of_days - 1;

      if(end_index > number_of_days)
        end_index = number_of_days;

      let plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, options) => {
          const {ctx} = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#ffffff';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }};
      
      var myChart = new Chart(document.getElementById("myChart"), {
        type: "line",
        data: {
          datasets: [
            {
              label: "Temperature",
              data: graphInput.slice(start_index, number_of_days - end_index),
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

      return () => {
        myChart.destroy()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userStartDate,userEndDate]);

    function graphInputGenerator (date) {
      let dateTime = fillDateArray(date,number_of_days);
      let temps = fillTempsArray(number_of_days);

      for (let i = number_of_days-1; i >= 0; i--) {
          let coord = {x: dateTime[i], y: temps[i]};
          graphInput.push(coord);
      }
  }

  // returns an array with 30 dates, one lesser than the other, 
  // starting date is current date
  function convertToDateTime (fullDate) {
    var hours = fullDate.getHours()
    var minutes = fullDate.getMinutes()
    var date = fullDate.getDate()
    var month = fullDate.getMonth() + 1
    var year = fullDate.getFullYear()
    var result = String(date) + "/" + String(month) + "/" + String(year) + " " + String(hours) + ":" + String(minutes);
    return result;
  }

  function fillDateArray (fullDate, len) {
    let arr = [];
    arr.push(convertToDateTime(fullDate));
    for (let i = 0; i < len-1; i++) {
      fullDate.setDate(fullDate.getDate() - 1)
      arr.push(convertToDateTime(fullDate));
    }
    return arr;
  }

  // populates temps array with random temperatures
  function fillTempsArray(len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
        //creates a random number between 15 and 24
        const x = Number(((Math.random() * 10) + 15).toFixed(2));
        arr.push(x);
    }
    return arr;
  }

    return (
      <div>
        <div className = 'date-picker-container'>
          <div className = 'date-picker From'>
            <label htmlFor = "date-from">From:    </label>  
            <DatePicker className = "date-from"
                        selected = {userStartDate} 
                        dateFormat = "dd/MM/yyyy" 
                        value = {userStartDate}
                        onChange = {(date)=> {
                          let earliest_date = new Date();
                          earliest_date.setDate(earliest_date.getDate() - number_of_days);
                      
                          if(date <= new Date() && date <= userEndDate  && date > earliest_date){
                          setUserStartDate(date);
                        }
                        }} />
          </div>
          <div className = 'date-picker To'>
          <label htmlFor = "date-to">To:    </label>      
          <DatePicker className = "date-to" 
                      selected = {userEndDate} 
                      dateFormat = "dd/MM/yyyy" 
                      value = {userEndDate}
                      onChange = {(date)=> {
                        if(date <= new Date() && date >= userStartDate){
                          setUserEndDate(date)
                         }
                        }} />
          </div>
          <div className = 'date-picker'>
            <p> Data Retrieved: Last {number_of_days} days</p>
          </div>
        </div>
        <div>
          <canvas id="myChart" className="graph">
            {" "}
          </canvas>
        </div>
      </div>
    );
}

export default Graph;
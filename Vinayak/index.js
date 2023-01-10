const express = require("express");

const app = express();

const axios = require('axios');

const https = require('node:https');

// populates temps array with random temperatures
function fillTempsArray(temps) {
    for (let i = 0; i < 39; i++) {
        //creates a random number between 15 and 24
        x = Number(((Math.random() * 10) + 15).toFixed(2));
        temps.push(x);
    }
}

// converts the date received in unix format from API to readable
function convertUnixToDateTime (unix) {
    var fullDate = new Date(unix * 1000);
    var hours = fullDate.getHours()
    var minutes = fullDate.getMinutes()
    var date = fullDate.getDate()
    var month = fullDate.getMonth() + 1
    var year = fullDate.getFullYear()
    var result = String(date) + "/" + String(month) + "/" + String(year) + " " + String(hours) + ":" + String(minutes);
    return result;
}

// returns an array with 40 dates, one lesser than the other, 
// starting date is current date
function fillDateArray (unixDate) {
    let arr = []
    for (let i = 0; i < 40; i++) {
        arr.push(convertUnixToDateTime(unixDate - (i*24*60*60)));
    }
    return arr;
}

// given the dateTime array and temps array, it combines a value from
// each to create x, y  coordinates
function graphInputGenerator (temps, dateTime) {
    let result = [];
    for (let i = 39; i >= 0; i--) {
        let coord = {x: dateTime[i], y: temps[i]};
        result.push(coord);
    }
    return result;
}

// returns temperature converted to fahreneit from celsius
function cToF(celsius) {
    return Number(celsius * 9 / 5 + 32).toFixed(2);
}

// returns temperature converted to celsius from fahreneit
function fToC(fahrenheit) {
    return Number((fahrenheit - 32) * 5 / 9).toFixed(2);
} 

// function that converts celsius array to fahreneit array
function fToCArray (array) {
    for (let i = 0; i < 40; i++) {
        array[i] = fToC(array[i]);
    }
}

// function that converts fahreneit array to celsius array
function cToFArray (array) {
    for (let i = 0; i < 40; i++) {
        array[i] = cToF(array[i]);
    }
}

// function that converts temperature in graphInput array
// from Fahreneit to Celsius
function fToCGraphInput (array) {
    for (let i = 0; i < 40; i++) {
        array[i].y = fToC(array[i].y);
    }
}

// function that converts temperature in graphInput array
// from Celsius to Fahreneit
function cToFGraphInput (array) {
    for (let i = 0; i < 40; i++) {
        array[i].y = cToF(array[i].y);
    }
}


app.get("/", function(req, res){
    const city = "London";
    const apiID = "aac0e38a5a3c567cd3e79a723bf39fc3";
    const unit = "metric"

    // API call to get weather data
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          apiID +
          "&units=" +
          unit
      )
      .then((response) => {

        // initialise temps array with it's only real value
        let temps = [response.data.main.temp];
        // populate the rest 39 values in temps array
        fillTempsArray(temps);
        // console.log(temps);    
        // console.log(temps.length); 

        // store date from API response, it's in unix format
        let unixDate = response.data.dt;
        // stores dateTime array which has 
        // the date and time for the past 40 days
        let dateTime = fillDateArray(unixDate);
        // console.log(dateTime);
        // console.log(dateTime.length)

        // stores the graph input converted frpm temperature 
        // and date arrays to coordinate format
        let graphInput = graphInputGenerator(temps, dateTime);
        // console.log(graphInput);

        // Below code is for testing cToFGraphInput and fToCGraphInput
        // cToFGraphInput(graphInput);
        // console.log(graphInput);
        // fToCGraphInput(graphInput);
        // console.log(graphInput);
          
        res.send("Sup");

        }
      ) .catch((err) => {
        setRes(err.response.status);
      });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})
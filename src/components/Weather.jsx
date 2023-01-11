// import React from "react";

// function Weather(props){
// // console.log(props.weather)

// const weatherData = props.weather
// const cityName = props.cityName

// const temperature = weatherData.data.main.temp
// const weatherDescription = weatherData.data.weather[0].main
// const weatherIcon = weatherData.data.weather[0].icon

// const day = (weatherIcon.charAt(weatherIcon.length -1) === 'd')? "day" : "night"

// // console.log(new Date(weatherData.data.dt*1000-(weatherData.data.timezone*1000)));

// // console.log(weatherIcon)


// const imageURL = "http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png"

// return(
//     <div className="weather-status">
//         <p>{day}</p>
//         <p>The temperature in {cityName} is {temperature}</p>
//         <p> <img src={imageURL} alt="Weathericon" /> Weather status: {weatherDescription}</p>
//     </div>
// )
// }

// export default Weather;
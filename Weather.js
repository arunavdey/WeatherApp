async function getData(city) {
    apiKey = "aac0e38a5a3c567cd3e79a723bf39fc3";

    url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    const result = await fetch(url);
    result.json().then(json => {
        console.log(json);
        return json;
    })
}

getData("Bengaluru");

// Console Output:
//
// {
//     coord: { lon: 77.6033, lat: 12.9762 },
//     weather: [
//       { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }
//     ],
//     base: 'stations',
//     main: {
//       temp: 290.95,
//       feels_like: 290.14,
//       temp_min: 290.95,
//       temp_max: 292.05,
//       pressure: 1021,
//       humidity: 52
//     },
//     visibility: 6000,
//     wind: { speed: 1.54, deg: 110 },
//     clouds: { all: 20 },
//     dt: 1673277014,
//     sys: {
//       type: 1,
//       id: 9205,
//       country: 'IN',
//       sunrise: 1673226845,
//       sunset: 1673267902
//     },
//     timezone: 19800,
//     id: 1277333,
//     name: 'Bengaluru',
//     cod: 200
//   }
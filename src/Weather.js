const apiKey = process.env.REACT_APP_API_KEY;

async function getData(city) {

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey;

  try {
    const result = await fetch(url);
    result.json().then((json) => {
      console.log(json);
    });
  } catch (error) {
    console.log("There was an error:", error);
  }
}

export default getData;

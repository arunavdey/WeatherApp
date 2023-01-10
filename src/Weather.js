async function getData(city) {
  const apiKey = "aac0e38a5a3c567cd3e79a723bf39fc3";

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
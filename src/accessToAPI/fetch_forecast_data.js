const fetchForecastData = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5MQCH64U6D4N39X9Y56XRU7NE&iconSet=icons2`,
      { mode: "cors" },
    );

    const weatherData = await response.json();

    return weatherData;
  } catch (err) {
    console.log("something went wrong =/");
  }
};

export default fetchForecastData;

const getChanceOfRain = (element, weatherData) => {
  return (element.textContent = weatherData.forecast.forecastday[0]['day']['daily_chance_of_rain']);
};

export default getChanceOfRain;

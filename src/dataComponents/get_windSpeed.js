const getWindSpeed = (element, weatherData) =>
  (element.textContent = weatherData.currentConditions.windspeed);

export default getWindSpeed;

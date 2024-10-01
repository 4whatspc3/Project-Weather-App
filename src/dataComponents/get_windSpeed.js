const getWindSpeed = (element, weatherData) => {
  return (element.textContent = weatherData.currentConditions.windspeed);
};

export default getWindSpeed;

const getHumidity = (element, weatherData) => {
  return (element.textContent = weatherData.currentConditions.humidity);
};

export default getHumidity;

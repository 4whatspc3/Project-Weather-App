const getTemp = (element, weatherData) => {
  return (element.textContent = weatherData.currentConditions.temp);
};

export default getTemp;

const getClouds = (element, weatherData) => {
  return (element.textContent = weatherData.currentConditions.conditions);
};

export default getClouds;

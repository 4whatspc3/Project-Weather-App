const getFeels = (element, weatherData) => {
  return (element.textContent = weatherData.currentConditions.feelslike);
};

export default getFeels;

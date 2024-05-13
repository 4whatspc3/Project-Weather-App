const getClouds = (element, weatherData) => {
  return (element.textContent = weatherData.current.condition.text);
};

export default getClouds;

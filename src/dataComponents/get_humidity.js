const getHumidity = (element, weatherData) => {
  return (element.textContent = weatherData.current.humidity);
};

export default getHumidity;

const getWindSpeed = (element, weatherData) => {
  return (element.textContent = weatherData.current.wind_kph);
};

export default getWindSpeed;

const getTemp = (element, weatherData) => {
  return (element.textContent = weatherData.current.temp_c);
};

export default getTemp;

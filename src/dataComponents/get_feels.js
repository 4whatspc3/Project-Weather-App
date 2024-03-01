const getFeels = (element, weatherData) => {
  return (element.textContent = weatherData.current.feelslike_c);
};

export default getFeels;

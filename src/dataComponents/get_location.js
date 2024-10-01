const getLocation = (element, weatherData) => {
  return (element.textContent = weatherData.address);
};

export default getLocation;

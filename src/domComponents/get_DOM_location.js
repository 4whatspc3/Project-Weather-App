const getDomLocation = () => {
  const locationInfo = document.createElement('div');
  locationInfo.className = 'location-info';

  const locationData = document.createElement('p');
  locationData.className = 'locationData';

  locationInfo.append(locationData);

  return { locationInfo };
};

export default getDomLocation;

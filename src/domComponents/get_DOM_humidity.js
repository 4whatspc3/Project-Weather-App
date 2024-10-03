const getDomHumidity = () => {
  const humidityInfo = document.createElement('div');
  humidityInfo.className = 'humidity-info';

  const title = document.createElement('p');
  title.textContent = 'Humidity';

  const humidityData = document.createElement('p');
  humidityData.className = 'humidityData';

  humidityInfo.append(title, humidityData);

  return { humidityInfo };
};

export default getDomHumidity;

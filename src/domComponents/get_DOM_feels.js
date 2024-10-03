const getDomFeels = () => {
  const feelsInfo = document.createElement('div');
  feelsInfo.className = 'feels-info';

  const title = document.createElement('p');
  title.textContent = 'Feels Like';

  const feelsData = document.createElement('p');
  feelsData.className = 'feelsData';

  feelsInfo.append(title, feelsData);

  return { feelsInfo };
};

export default getDomFeels;

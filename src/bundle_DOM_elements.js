import getDomTemp from './domComponents/get_DOM_temp';

import getDomFeels from './domComponents/get_DOM_feels';

import getDomHumidity from './domComponents/get_DOM_humidity';

import getDomWindSpeed from './domComponents/get_DOM_windSpeed';

import getDomChanceOfRain from './domComponents/get_DOM_chanceOfRain';

import getDomClouds from './domComponents/get_DOM_clouds';

import getDomLocation from './domComponents/get_DOM_location';

import getDomDateTime from './domComponents/get_DOM_dateTime';

const bundleDomElements = () => {
  const { tempInfo } = getDomTemp();

  const { feelsInfo } = getDomFeels();

  const { humidityInfo } = getDomHumidity();

  const { windSpeedInfo } = getDomWindSpeed();

  const { chanceOfRainInfo } = getDomChanceOfRain();

  const { cloudsInfo } = getDomClouds();

  const { locationInfo } = getDomLocation();

  const { dateTimeInfo } = getDomDateTime();

  return {
    tempInfo,
    feelsInfo,
    humidityInfo,
    windSpeedInfo,
    chanceOfRainInfo,
    cloudsInfo,
    locationInfo,
    dateTimeInfo,
  };
};

export default bundleDomElements;

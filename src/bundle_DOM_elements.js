import getDomTemp from "./domComponents/get_DOM_temp";

import getDomFeels from "./domComponents/get_DOM_feels";

import getDomHumidity from "./domComponents/get_DOM_humidity";

import getDomWindSpeed from "./domComponents/get_DOM_windSpeed";

import getDomChanceOfRain from "./domComponents/get_DOM_chanceOfRain";

import getDomClouds from "./domComponents/get_DOM_clouds";

const bundleDomElements = () => {
  const { tempInfo } = getDomTemp();

  const { feelsInfo } = getDomFeels();

  const { humidityInfo } = getDomHumidity();

  const { windSpeedInfo } = getDomWindSpeed();

  const { chanceOfRainInfo } = getDomChanceOfRain();

  const { cloudsInfo } = getDomClouds();

  return { tempInfo, feelsInfo, humidityInfo, windSpeedInfo, chanceOfRainInfo, cloudsInfo };
};

export default bundleDomElements;

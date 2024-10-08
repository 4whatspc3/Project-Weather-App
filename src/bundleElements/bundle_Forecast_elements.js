import createBlocksForecast from "../domComponents/get_Blocks_forecast";

import getDomTemp from "../domComponents/get_DOM_temp";

import getDomChanceOfRain from "../domComponents/get_DOM_chanceOfRain";

import getDomClouds from "../domComponents/get_DOM_clouds";

import getDomDateTime from "../domComponents/get_DOM_dateTime";

const getForecastElements = () => {
  const { tempInfo } = getDomTemp();

  const { chanceOfRainInfo } = getDomChanceOfRain();

  const { cloudsInfo } = getDomClouds();

  const { dateTimeInfo } = getDomDateTime();

  return {
    tempInfo,
    chanceOfRainInfo,
    cloudsInfo,
    dateTimeInfo,
  };
};

const bundleForecastElements = () => {
  for (let i = 0; i < 7; i++) {
    const forecast = getForecastElements();

    createBlocksForecast(i);

    const block = document.querySelector(`[data-block-number="${i}"]`);

    Object.values(forecast).forEach((item) => {
      block.append(item);
    });
  }
};

export default bundleForecastElements;

import createBlocksForecast from "../domComponents/get_Blocks_forecast";

import getDomTemp from "../domComponents/get_DOM_temp";

import getDomChanceOfRain from "../domComponents/get_DOM_chanceOfRain";

import getDomCloudsFW from "../domComponents/get_DOM_cloudsFW";

import getDomDateTimeFW from "../domComponents/get_DOM_dateTimeFW";

const getForecastElements = () => {
  const { tempInfo } = getDomTemp();

  const { chanceOfRainInfo } = getDomChanceOfRain();

  const { cloudsInfoFW } = getDomCloudsFW();

  const { dateTimeInfoFW } = getDomDateTimeFW();

  return {
    dateTimeInfoFW,
    cloudsInfoFW,
    chanceOfRainInfo,
    tempInfo,
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

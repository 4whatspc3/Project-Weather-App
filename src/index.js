import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

import accessForecastAPI from "./access_forecast_API";

const component = () => {
  const {
    tempInfo,
    feelsInfo,
    humidityInfo,
    windSpeedInfo,
    chanceOfRainInfo,
    cloudsInfo,
    locationInfo,
    dateTimeInfo,
  } = bundleDomElements();

  const { getWeather } = acessWeatherAPI();

  const { getForecast } = accessForecastAPI();

  return {
    tempInfo,
    feelsInfo,
    humidityInfo,
    windSpeedInfo,
    chanceOfRainInfo,
    cloudsInfo,
    locationInfo,
    dateTimeInfo,
    getWeather,
    getForecast,
  };
};

const page = component();

for (let key in page){
  
  if(typeof(page[key]) !== 'function' ){
    document.body.append(page[key])
    
    const weatherDataClass = document.querySelector(`.${page[key].lastElementChild.className}`);

    page.getWeather("salvador, br", weatherDataClass);
  }

}

const chanceOfRain = document.querySelector('.chanceOfRain');
page.getForecast('salvador, br', chanceOfRain);
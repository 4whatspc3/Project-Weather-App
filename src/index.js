import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

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
const axios = require('axios');
const { ACCUWEATHER_BASE_URL, ACCUWEATHER_API_KEY } = require('../../settings');



async function getCity(name){
  try {
    const response = await axios.get(
      `${ACCUWEATHER_BASE_URL}/locations/v1/cities/search`,
      {
        params: {
          apikey: ACCUWEATHER_API_KEY,
          q: name
        }
      }
    );
    const data = response.data;
    if(data.lenght === 0){
      const errorCity = {"Message":"No se encontró esa ciudad"};
      return errorCity;
    }
    
    return {
      locationID: data[0].Key,
      cityName: data[0].LocalizedName,
      countryName: data[0].Country.LocalizedName
    }
    
  } catch (error) {
    console.error(error);
  }
}

async function getCurrentConditions(locationID){
  try {
    const response = await axios.get(
      `${ACCUWEATHER_BASE_URL}/currentconditions/v1/${locationID}`,
      {
        params: {
          apikey: ACCUWEATHER_API_KEY,
        }
      }
    );
    const data = response.data;
    
    return {
      weather: data[0].WeatherText,
      temperature: data[0].Temperature.Metric.Value,
      precipitation: data[0].HasPrecipitation
    }
    
  } catch (error) {
    console.error(error);
  }
}

module.exports = {getCity, getCurrentConditions};
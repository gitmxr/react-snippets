// import { useEffect } from "react";


// const api  = "https://api.weatherapi.com/v1/current.json?key=5766eb61c2294bae8d3112119262101";


// const getCurrentWeather = async() =>{

//   try{

//     //  const res = await axios.get(api)
//   }catch(error){
//      console.log(error)
//   }
// }


// useEffect(() =>{
//   getWeatherData();
// })
 
 
import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  timeout: 10000
});

// Automatically attach API key to every request
weatherApi.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.key = '5766eb61c2294bae8d3112119262101';
  return config;
});

export const getCurrentWeather = (city) => {
  return weatherApi.get('/current.json', {
    params: {
      q: city
    }
  });
};


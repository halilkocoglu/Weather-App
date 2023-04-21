import { createContext, useContext, useState, useEffect } from "react";
import cities from "../json/cities.json";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Aydın");
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    let selectCity = cities.filter((item) => item.name === city)[0];
    let key = "a7d438f9ec6a4ac9996195006232004";

    axios(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selectCity.latitude},${selectCity.longitude}&days=7&hour=24`
    )
      .then((res) => res.data)
      .then((res) => res.forecast)
      .then((res) => setWeatherData(res.forecastday));
  }, [city]);
  //   console.log("***weather data:", weatherData);
  const values = {
    cities,
    city,
    setCity,
    weatherData,
  };
  //   if (weatherData.length === 0) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeatherContext = () => useContext(WeatherContext);

export { WeatherProvider, useWeatherContext };

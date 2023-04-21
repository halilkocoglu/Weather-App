import React from "react";
import { useWeatherContext } from "../contexts/WeatherContext";

function DayList() {
  let { weatherData } = useWeatherContext();
  //   console.log("***weatherData: ", weatherData);
  return (
    <div className="mt-5">
      {weatherData.map((item, index) => {
        const date = new Date(item.date);
        const dayNumber = date.getDay();
        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const day = daysOfWeek[dayNumber];
        return (
          <div key={index} className={`card-group col-3`}>
            <div className={`card ${index === 0 && "bg-info"}  `}>
              <img
                className="card-img-top"
                src={item.day.condition.icon}
                alt="desc"
              />
              <div className="card-body">
                <h4 className="card-title">{day}</h4>
                <small>
                  <b>Max: {item.day.maxtemp_c}°C</b> Min: {item.day.mintemp_c}°C
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(DayList);

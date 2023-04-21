import React from "react";
import { useWeatherContext } from "../contexts/WeatherContext";
function Dropdown() {
  const { city, setCity, cities } = useWeatherContext();
  return (
    <div className="mt-4">
      <button
        className="btn btn-info dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {city}
      </button>
      <div className="dropdown-menu">
        {cities.map((item) => (
          <div key={item.id}>
            <span
              className="dropdown-item"
              onClick={() => {
                setCity(item.name);
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;

import React from "react";
import Dropdown from "./Dropdown";
import DayList from "./DayList";

function Container() {
  return (
    <div className="mt-5 container p-4">
      <span className="title">Weather Forecast</span>
      <Dropdown />
      <DayList />
    </div>
  );
}

export default Container;

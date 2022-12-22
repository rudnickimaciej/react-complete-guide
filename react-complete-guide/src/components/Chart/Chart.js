import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((d) => (
        <ChartBar key={d.label} data={d} maxValue={null} label={d.label} />
      ))}
    </div>
  );
};

export default Chart;

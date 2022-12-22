import React from "react";
import Chart from "../Chart/Chart";

const AdoptionsChart = (props) => {
  const chartDataPoints = [
    {
      label: "adopted",
      value: props.adoptions.filter((a) => {
        return a.status.id == "adopted";
      }).length,
    },
    {
      label: "notadopted",
      value: props.adoptions.filter((a) => {
        return a.status.id == "notadopted";
      }).length,
    },
    {
      label: "duringadoption",
      value: props.adoptions.filter((a) => {
        return a.status.id == "duringadoption";
      }).length,
    },
  ];

  return <Chart />;
};

export default AdoptionsChart;

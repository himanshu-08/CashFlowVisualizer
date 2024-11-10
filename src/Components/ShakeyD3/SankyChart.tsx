import React from "react";
import { data } from "./data";
import Sankey from "./Sankey";

const SankeyChart = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return <Sankey data={data} width={width} height={height} />;
};

export default SankeyChart;

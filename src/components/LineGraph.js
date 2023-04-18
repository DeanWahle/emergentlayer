import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineGraph = ({ data }) => {
  const formattedData = [];

  for (let i = 0; i < data.length; i++) {
    const innerArray = data[i];
    const time = innerArray[2];
    const money = parseFloat(innerArray[4].replace(/,/g, ""));
    formattedData.push({ time, money });
  }

  return (
    <LineChart width={500} height={300} data={formattedData}>
      <Line type="monotone" dataKey="money" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default LineGraph;

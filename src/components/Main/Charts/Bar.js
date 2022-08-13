import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 4000,
    Using: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    Using: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    Using: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    Using: 3908,
    amt: 2000,
  },
  {
    name: "June",
    uv: 1890,
    Using: 4800,
    amt: 2181,
  },
  {
    name: "July",
    uv: 2390,
    Using: 3800,
    amt: 2500,
  },
  {
    name: "August",
    uv: 3490,
    Using: 4300,
    amt: 2100,
  },
];

export default class BarChartUsers extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-has-no-padding-jphoc";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Using" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

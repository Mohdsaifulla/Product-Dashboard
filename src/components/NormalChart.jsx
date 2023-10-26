import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const NormalChart = () => {
  const data = [
    {
      name: "JAN",
      SOLD: 4000,
      ITEM: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      SOLD: 3000,
      ITEM: 1398,
      amt: 2210,
    },
    {
      name: "MARCH",
      SOLD: 2000,
      ITEM: 9800,
      amt: 2290,
    },
    {
      name: "APRIL",
      SOLD: 2780,
      ITEM: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      SOLD: 1890,
      ITEM: 480,
      amt: 2181,
    },
    {
      name: "JUNE",
      SOLD: 2390,
      ITEM: 3800,
      amt: 2500,
    },
    {
      name: "JULY",
      SOLD: 3490,
      ITEM: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="w-10/12 h-72 shadow-lg p-2 rounded">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="SOLD"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="ITEM"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NormalChart;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", uv: 8000, pv: 2000, amt: 4400 },  // High
  { name: "2", uv: 3000, pv: 9000, amt: 2210 },  // Low → High
  { name: "3", uv: 5000, pv: 2000, amt: 2290 },  // High → Low
  { name: "4", uv: 2500, pv: 8500, amt: 3000 },  // Low → High
  { name: "5", uv: 3000, pv: 9000, amt: 2210 },  // Low → High
  { name: "6", uv: 7000, pv: 1500, amt: 2290 },  // High → Low
];

const ResolvedQueriesLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#165DFF" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#14C9C9" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ResolvedQueriesLineChart;

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'March 2024', uv: 0.1, pv: 0.9 },
  { name: 'March 2024', uv: 0.9, pv: 0.1 },
  { name: 'March 2024', uv: 0.3, pv: 0.7 },
  { name: 'March 2024', uv: 0.7, pv: 0.3 },
  { name: 'March 2024', uv: 0.5, pv: 0.5 },
  { name: 'March 2024', uv: 1, pv: 0 },
];

const SentimentTrendsGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        layout="horizontal"
        data={data}
        margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 8 }}
          axisLine={{ stroke: "#E70000" }}
          interval={1}
        />
        <YAxis
          type="number"
          domain={[0, 1]}
          ticks={[0, 0.5, 1]}
          tick={{ fontSize: 8 }}
          axisLine={{ stroke: "#00B81D" }}
        />
        <Tooltip />
        <Line dataKey="pv" stroke="#00B81D" strokeWidth={1.5} />
        <Line dataKey="uv" stroke="#16C5F4" strokeWidth={1.5} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SentimentTrendsGraph;

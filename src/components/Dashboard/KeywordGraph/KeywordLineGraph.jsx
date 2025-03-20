import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', uv: 4000, pv: 2400, amt: 2400 },
  { name: '2', uv: 3000, pv: 1398, amt: 2210 },
  { name: '3', uv: 5000, pv: 800, amt: 2290 },
  { name: '4', uv: 1000, pv: 6900, amt: 2000 },
  { name: '5', uv: 4500, pv: 1200, amt: 2181 },
  { name: '6', uv: 900, pv: 5000, amt: 2500 },
  { name: '7', uv: 3200, pv: 3400, amt: 2100 },
  { name: '8', uv: 1200, pv: 5200, amt: 2300 },
  { name: '9', uv: 4700, pv: 1100, amt: 2800 },
  { name: '10', uv: 1800, pv: 6300, amt: 2200 },
];

const KeywordLineGraph = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto">
      <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 200 : 200}>
        <LineChart data={data} margin={{ top: 30, right: 0, left: -10, bottom: 0 }}>
          <XAxis
            dataKey="name"
            stroke="#86909C"
            padding={{ left: 20, right: 20 }}
            tick={{ fontSize: 12, fill: '#86909C' }} // ✅ Text color + size
          />
          <YAxis
            stroke="#86909C"
            tick={{ fontSize: 12, fill: '#86909C' }} // ✅ Text color + size
          />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KeywordLineGraph;

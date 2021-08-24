import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import './chart.css';

export default function Chart(props) {
  const { title, data, dataKey, grid } = props;
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width={'99%'} aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          <XAxis dataKey="name" stroke="#082032" />
          <YAxis stroke="#082032" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#082032" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

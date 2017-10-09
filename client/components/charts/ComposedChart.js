import React, {Component} from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import d3 from 'd3';

class SimpleComposedChart extends Component {
  render() {
    const data = [
      {name: 'Page A', uv: 590, pv: 800, amt: 1400},
      {name: 'Page B', uv: 868, pv: 967, amt: 1506},
      {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
      {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
      {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
      {name: 'Page F', uv: 1400, pv: 680, amt: 1700},
    ];
    return (
      <div style={{width: '100%', height: '300px'}}>
        <ResponsiveContainer>
          <ComposedChart
            layout="vertical"
            width={600}
            height={400}
            data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default SimpleComposedChart;

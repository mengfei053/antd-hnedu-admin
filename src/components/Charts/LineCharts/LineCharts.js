import React from 'react';
import styles from './LineCharts.less';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
  {name: '1', pv: 2400,},
  {name: '2', pv: 1398,},
  {name: '3', pv: 9800,},
  {name: '4', pv: 3908,},
  {name: '5', pv: 4800,},
  {name: '6', pv: 3800,},
  {name: '7', pv: 4300,},
];

const LineCharts = () => (
<ResponsiveContainer minheight={300}>
  <LineChart data={data}
             margin={{top: 0, right: 30, left: 0, bottom: 5}} >
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
  </LineChart>
</ResponsiveContainer>
)

export default LineCharts;

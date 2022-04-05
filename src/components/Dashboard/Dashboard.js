import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [alldata, setAllData] = useState({})
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    } , [])
    return (
        <div className='chart'>
            <div className='pie-chart'>
                <PieChart width={300} height={300}>
                    <Pie data={alldata} dataKey="revenue" nameKey="sell" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={alldata} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
                <h4 style={{textAlign: 'center'}}>Revenue</h4>
            </div>
            <div className='line-chart'>
                <LineChart width={300} height={300} data={alldata}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month" />
                    <YAxis></YAxis>
                </LineChart>
                <h4 style={{textAlign: 'center'}}>Sell</h4>
            </div>
        </div>
    );
};

export default Dashboard;

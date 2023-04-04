import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


const Dashboard = () => {

    const studentArray = [
        { id: 1, name: "John", physics: 85, chemistry: 75, math: 90 },
        { id: 2, name: "Sarah", physics: 70, chemistry: 80, math: 95 },
        { id: 3, name: "Tom", physics: 90, chemistry: 60, math: 5 },
        { id: 4, name: "Lily", physics: 80, chemistry: 70, math: 75 },
        { id: 5, name: "Peter", physics: 65, chemistry: 85, math: 80 },
        { id: 6, name: "Emma", physics: 75, chemistry: 90, math: 65 },
        { id: 7, name: "Bob", physics: 95, chemistry: 85, math: 70 },
        { id: 8, name: "Lucy", physics: 30, chemistry: 75, math: 90 },
        { id: 9, name: "Alex", physics: 70, chemistry: 85, math: 35 },
        { id: 10, name: "Grace", physics: 90, chemistry: 80, math: 8 },
        { id: 11, name: "Jack", physics: 75, chemistry: 70, math: 95 },
        { id: 12, name: "Sophie", physics: 85, chemistry: 90, math: 80 }
      ];
      
      
    return (
        <ResponsiveContainer width="100%" height="100%">
            <div>
                <LineChart
                    width={1000}
                    height={300}
                    data={studentArray}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type={'monotone'} stroke="#8884d8" dataKey="physics"></Line>
                <Line type={'monotone'} dataKey="chemistry"></Line>
                <Line type={'monotone'} dataKey="math"></Line>
                </LineChart>
            </div>
        </ResponsiveContainer>
    );
};

export default Dashboard;
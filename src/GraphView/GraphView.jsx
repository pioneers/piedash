import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

export default function GraphView() {
    const data = [
        {
            name: "Page A",
            Motor1: 4000,
            Motor2: 2400,
            Motor3: 2400,
        },
        {
            name: "Page B",
            Motor1: 3000,
            Motor2: 1398,
            Motor3: 2210,
        },
        {
            name: "Page C",
            Motor1: 2000,
            Motor2: 1540,
            Motor3: 2290,
        },
        {
            name: "Page D",
            Motor1: 2780,
            Motor2: 3908,
            Motor3: 2000,
        },
        {
            name: "Page E",
            Motor1: 1890,
            Motor2: 4800,
            Motor3: 2181,
        },
        {
            name: "Page F",
            Motor1: 2390,
            Motor2: 3800,
            Motor3: 2500,
        },
        {
            name: "Page G",
            Motor1: 3490,
            Motor2: 4300,
            Motor3: 2100,
        },
    ];

    return (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="Motor2"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Motor3" stroke="#ff0000" />
            <Line type="monotone" dataKey="Motor1" stroke="#82ca9d" />
        </LineChart>
    );
}

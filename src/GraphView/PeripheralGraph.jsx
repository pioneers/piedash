import React,{useEffect, useState} from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

export default function GraphView({ deviceName, data, key }) {
    // let myVar = setInterval(myTimer, 5000);
    // const [timer,updateTimer] = useState(0);
    // const [emptyArray,updateArray] = useState([]);
    // function myTimer() {
    //     updateTimer(timer+5000);
    //     emptyArray.push({name: "Page A",
    //     Motor1: 4000,
    //     Motor2: 2400,
    //     Motor3: 2400,});
    //     updateArray( [...emptyArray]);
    //     console.log(emptyArray);
    // }
    const [distArray,updateArray] = useState([]);
    const [timer,updateTimer] = useState(0);
    let newObj = {};

    newObj["Name"] = 0;
    for (let i=0; i<data.length;i++){
        let title = "Sensor"+ i ;
        newObj[title] = data[i].params["Distance"];
    }
    useEffect( () => {
        updateTimer(timer + 2000);
        setTimeout(() => {
            updateArray([...distArray,newObj]);
        }, 2000);
    }

    )
    return (
        <LineChart
            width={500}
            height={300}
            data={distArray}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
                type="monotone"
                dataKey="Sensor0"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Sensor1" stroke="#ff0000" />
            <Line type="monotone" dataKey="Sensor2" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Sensor3" stroke="#82ca9a" />
        </LineChart>
    );
}
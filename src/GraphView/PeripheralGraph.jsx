import React, { useEffect, useState} from "react";
import { Dropdown, SplitButton, ButtonToolbar } from "react-bootstrap";
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
    // const [newObj, setNewObj] = useState({"Name": timer})
    let newObj = {};
    newObj["Name"] = timer;

    const resize = (sizeBool) => {if (sizeBool){
        // let counter = 0;
        // let newDataArray = [];
        // while(counter<50){
        //     let newObjArray = {};
        //     newObjArray["Name"] = counter;
        //     for (let k = 0;k <data.length;k++){
        //         let titleOfDataPoint = "Sensor" + k;
        //         let currCounter = 0;
        //         for (let j = counter; j<counter +10; j++){
        //             currCounter +=distArray[j][titleOfDataPoint];
        //         }
        //         newObjArray[titleOfDataPoint] = currCounter/10;
        //     }
        //     newDataArray.push(newObjArray);
        //     counter+=10;

        // }
        // distArray = newDataArray;
        // updateArray([distArray]);
        let newDistArray = distArray.slice(0, 2);
        updateArray(newDistArray);
        // console.log(distArray.length);
        // console.log(distArray);
    }
    }
    for (let i=0; i<data.length;i++){
        let title = "Sensor"+ i ;
        newObj[title] = data[i].params["Distance"];
    }
    useEffect( () => {
        setTimeout(() => {
            updateTimer(timer + 0.5);
            updateArray([...distArray,newObj]);
            // resize(distArray.length > 9 && distArray.length % 5 == 0 ? true : false);
            console.log(distArray);
        }, .5);
    })
    
    const BUTTONS = ['Distance'];
    function renderDropdownButton(title, i) {
        return (
            <SplitButton
                bsStyle={title.toLowerCase()}
                title={title}
                key={i}
                id={`split-button-basic-${i}`}
            >
            <Dropdown.Item eventKey="1">Velocity</Dropdown.Item>
            <Dropdown.Item eventKey="2">DC</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
        )
    }


    return (
        <div>
        {/* <div className="dropdown">
            <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
        </div> */}
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
        </div>
    );
}
import React from "react";
import PeripheralTable from "./PeripheralTable";

export default function TableView({ data }) {
    let peripheralGroups = {};
    data.forEach((p) => {
        let group = peripheralGroups[p.device_name] ?? [];
        group.push(p);
        peripheralGroups[p.device_name] = group;
    });

    for (const item in peripheralGroups) {
        console.log(item)
    }

    return (
            Object.keys(peripheralGroups).map((deviceName, i) => (
                <PeripheralTable deviceName={deviceName} data={peripheralGroups[deviceName]} key={i}/>
            ))
        )  
    
}

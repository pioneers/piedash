import React from "react";
import PeripheralGraph from "./PeripheralGraph";

export default function GraphView({ data }) {
    let peripheralGroups = {};
    data.forEach((p) => {
        let group = peripheralGroups[p.device_name] ?? [];
        group.push(p);
        peripheralGroups[p.device_name] = group;
});

    return (
            Object.keys(peripheralGroups).map((deviceName, i) => (
                <PeripheralGraph deviceName={deviceName} data={peripheralGroups[deviceName]} key={i}/>
            ))
        )  
    
}

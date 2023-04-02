import React from "react";
import WorkoutInfoData from "./WorkoutInfoData";

export default function WorkoutInfo(props) {
    // Convert number of seconds to m:ss format
    let durationMin = Math.floor(props.duration / 60).toString();
    let durationSec = (props.duration % 60).toString();
    // Add leading zero to seconds if necessary
    if (durationSec.length === 1) 
        durationSec = "0" + durationSec;
    const duration = `${durationMin}:${durationSec}`;
    return (
        <div className="workout-info">
            <WorkoutInfoData 
                type="Время"
                value={duration}
            />
            <WorkoutInfoData 
                type="Инвентарь"
                value={props.inventory}
            />
            <WorkoutInfoData 
                type="Зона"
                value={props.area}
            />
        </div>
    )
}
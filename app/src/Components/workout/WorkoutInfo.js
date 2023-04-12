import React from "react";

export default function WorkoutInfo(props) {
    let durationMin = Math.floor(props.duration / 60).toString();
    let durationSec = (props.duration % 60).toString();
    
    var duration = `${durationMin} мин.`;

    if (durationSec !== "0") {
        duration += ` ${durationSec} с.`;
    }
    
    return (
        <div className="workout-info-container">
            <div>
                {props.inventory}
            </div>
            <div>
                {props.area}
            </div>
            <div>
                {duration}
            </div>
        </div>
    )
}
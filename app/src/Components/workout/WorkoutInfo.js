import React from "react";
import { secondsToString } from "../../Scripts/converters";

export default function WorkoutInfo(props) {
    const duration = secondsToString(props.duration)
    
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
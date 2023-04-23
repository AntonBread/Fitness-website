import React from "react";
import { secondsToString } from "../../Scripts/converters";
import { getInventoryName, getAreaName } from "../../Scripts/workoutFilterData";

export default function WorkoutInfo(props) {
    const duration = secondsToString(props.duration)
    
    return (
        <div className="workout-info-container">
            <div>
                {getInventoryName(props.inventory)}
            </div>
            <div>
                {getAreaName(props.area)}
            </div>
            <div>
                {duration}
            </div>
        </div>
    )
}
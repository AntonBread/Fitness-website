import React from "react";

export default function WorkoutInfoData(props) {
    return (
        <div className="workout-info-data">
            <div>{props.type}:</div>
            <div>{props.value}</div>
        </div>
    )
}
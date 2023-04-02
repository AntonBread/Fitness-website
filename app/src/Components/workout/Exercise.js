import React from "react";

export default function Exercise(props) {
    return (
        <div className="workout-exercise">
            <div className="workout-exercise-property">№{props.num}</div>
            <div className="workout-exercise-property">{props.name}</div>
            <div className="workout-exercise-property">{props.description}</div>
            <div className="workout-exercise-property">{props.area}</div>
            <div className="workout-exercise-property">{props.repCount}</div>
            <div className="workout-exercise-property">{props.duration}</div>
        </div>
    )
}
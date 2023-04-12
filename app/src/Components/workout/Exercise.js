import React from "react";

export default function Exercise(props) {
    return (
        <div className="workout-exercise-list-item">
            <div>
                <img className="workout-exercise-image" src={props.imageSrc} alt="altlol"></img>
            </div>
            <div className="workout-exercise-list-item-text">
                <div className="workout-exercise-name">{props.name}</div>
                <div>{props.area}</div>
                <br />
                <div>{props.repCount}</div>
            </div>
        </div>
    )
}
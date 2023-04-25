import React from "react";
import { secondsToString } from "../../Scripts/converters";
import { getDifficultyName } from "../../Scripts/workoutFilterData";

export default function WorkoutCard(props) {
    const duration = secondsToString(props.duration)
    const difficultyName = getDifficultyName(props.difficulty)

    return (
        <div>
            <a href={`/workout?id=${props.id}`} className="catalog-card-container">
                <img className="catalog-card-image" src={props.previewSrc} alt="no"></img>
                <div className="catalog-card-description">
                    <h2 className="catalog-card-description-title">{props.name}</h2>
                    <div className="catalog-card-description-text">{`${duration} - ${difficultyName}`}</div>
                </div>
            </a>
        </div>
    )
}

import React from "react";
import { secondsToString } from "../../Scripts/converters";

export default function WorkoutCard(props) {
    const duration = secondsToString(props.duration)

    return (
        <div className="catalog-card-container">
            <a href={`/workout?id=${props.id}`}>
                <img className="catalog-card-image" src={props.previewSrc} alt="no"></img>
                <div className="catalog-card-description">
                    <div className="catalog-card-description-text">{props.name}</div>
                    <div className="catalog-card-description-text">{props.difficulty}</div>
                    <div className="catalog-card-description-text">{props.inventory}</div>
                    <div className="catalog-card-description-text">{props.area}</div>
                    <div className="catalog-card-description-text">{duration}</div>
                </div>
            </a>
        </div>
    )
}

import React from "react";
import WorkoutCard from "./WorkoutCard";

export default function CatalogContent(props) {
    const workouts = props.data.map(workout => {
        return (
            <WorkoutCard
                key={workout.id}
                id={workout.id}
                previewSrc={workout.previewImageSrc}
                duration={workout.duration}
                inventory={workout.inventory}
                area={workout.area}
            />
        )
    })

    return (
        <div className="catalog-content-container">
            <h2 className="catalog-title">Тренировки</h2>
            <div className="catalog-list-container">
                {workouts}
            </div>
        </div>
    )
}
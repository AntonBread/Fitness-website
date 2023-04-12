import React from "react";
import Exercise from "./Exercise";
import ExerciseListHeader from "./ExerciseListHeader";

export default function ExerciseInfo(props) {
    const exercises = props.exercises.map(item => {
        return (
            <Exercise
                key={item.name}
                imageSrc={item.imageSrc}
                name={item.name}
                area={item.area}
                repCount={item.repCount}
            />
        )
    })
    return (
        <div>
            <ExerciseListHeader />
            <div className="workout-exercise-list-container">
                {exercises}
            </div>
        </div>
    )
}
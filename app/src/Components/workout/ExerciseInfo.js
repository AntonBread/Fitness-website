import React from "react";
import Exercise from "./Exercise";
import ExerciseListHeader from "./ExerciseListHeader";
import exerciseData from "./data";

export default function ExerciseInfo() {
    const exercises = exerciseData.map(item => {
        return (
            <Exercise 
                num={item.num}
                name={item.name}
                description={item.description}
                area={item.area}
                repCount={item.repCount}
                duration={item.duration}
            />
        )
    })
    return (
        <div className="workout-exercise-info">
            <ExerciseListHeader />
            {exercises}
        </div>
    )
}
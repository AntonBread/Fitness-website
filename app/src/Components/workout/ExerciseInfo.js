import React from "react";
import Exercise from "./Exercise";
import ExerciseListHeader from "./ExerciseListHeader";
import WorkoutDoneButton from "./WorkoutDoneButton";

export default function ExerciseInfo(props) {
    const exercises = props.exercises.map(item => {
        return (
            <Exercise
                key={item.NameOfExercise}
                imageSrc={item.Pictures}
                name={item.NameOfExercise}
                area={item.MuscleGroups}
                repCount={item.NumberOfRepetitions}
            />
        )
    })
    return (
        <div className="workout-exercise-info-container">
            <ExerciseListHeader />
            <div className="workout-exercise-list-container">
                {exercises}
            </div>
            {props.session && <WorkoutDoneButton onClick={props.handleWorkoutDoneClicked} />}
        </div>
    )
}

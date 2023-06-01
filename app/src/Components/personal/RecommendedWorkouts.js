import React from "react";
import WorkoutSlider from "./WorkoutsSlider";

export default function RecommendedWorkouts(props) {
    return (
        <div className="personal-workouts-wallpaper">
            <div className="personal-workouts-container">
                <div className="line"></div>
                <h1 className="personal-workouts-title">Рекомендованные тренировки</h1>
                <WorkoutSlider
                    recommendedWorkoutData={props.workoutData}
                />
            </div>
        </div>
    )
}
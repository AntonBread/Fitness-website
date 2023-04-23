import React from "react"
import Video from "./workout/Video"
import WorkoutInfo from "./workout/WorkoutInfo"
import ExerciseInfo from "./workout/ExerciseInfo"
import data from "./data"

export default function Workout() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    var workoutData

    data.every((workout) => {
        if (workout.id === Number(params.id)) {
            workoutData = workout;
            return false;
        }
        return true;
    })

    return (
        <div>
            <Video
                video={workoutData.video}
            />
            <WorkoutInfo
                duration={workoutData.duration}
                inventory={workoutData.inventory}
                area={workoutData.area}
            />
            <ExerciseInfo
                exercises={workoutData.exercises}
            />
        </div>
    )
}

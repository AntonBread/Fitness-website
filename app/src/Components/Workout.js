import React from "react"
import queryString from "query-string"
import Video from "./workout/Video"
import WorkoutInfo from "./workout/WorkoutInfo"
import ExerciseInfo from "./workout/ExerciseInfo"
import data from "./data"
import { APIBase } from "./data"

export default function Workout(props) {
    // Сплитим строку поиска по вопросу чтобы получить параметры
    // Обычный window.location.search с хэш-роутером не работает
    const params = queryString.parse(window.location.hash.split("?")[1])

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

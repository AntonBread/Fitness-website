import React from "react"
import Video from "./workout/Video"
import WorkoutInfo from "./workout/WorkoutInfo"
import ExerciseInfo from "./workout/ExerciseInfo"

export default function Workout() {
    return (
        <div>
            <Video
                video="https://www.youtube.com/embed/jhzzQd5hdCM"
            />
            <WorkoutInfo
                duration={330}
                inventory="Не требуется"
                area="Спина"
            />
            <ExerciseInfo />
        </div>
    )
}
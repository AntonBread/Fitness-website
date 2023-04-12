import React from "react"
import Video from "./workout/Video"
import WorkoutInfo from "./workout/WorkoutInfo"
import ExerciseInfo from "./workout/ExerciseInfo"
import data from "./data"

export default function Workout() {
    return (
        <div>
            <Video
                video={data.video}
            />
            <WorkoutInfo
                duration={data.duration}
                inventory={data.inventory}
                area={data.area}
            />
            <ExerciseInfo 
                exercises={data.exercises}
            />
        </div>
    )
}
import React, { useState, useEffect } from "react"
import queryString from "query-string"
import Video from "./workout/Video"
import WorkoutInfo from "./workout/WorkoutInfo"
import ExerciseInfo from "./workout/ExerciseInfo"
import { APIBase } from "./data"
import { useLocation, useNavigate } from "react-router-dom"
import { getEmailCookie } from "../Scripts/auth"

export default function Workout(props) {
    const navigate = useNavigate()

    const location = useLocation()
    const workoutData = location.state
    // Сплитим строку поиска по вопросу чтобы получить параметры
    // Обычный window.location.search с хэш-роутером не работает
    const params = queryString.parse(window.location.hash.split("?")[1])

    const [exerciseData, setExerciseData] = useState(null)

    useEffect(() => {
        async function executeRequest() {
            const result = await requestExerciseData(params.id)
            setExerciseData(result)
        }
        executeRequest()
    }, [])

    async function handleWorkoutDoneClicked(event) {
        event.target.disable = "true"
        const success = requestWorkoutStatUpdate(workoutData.duration, exerciseData.length)
        console.log(success)
        if (success) {
            navigate("/stats")
        }
        else {
            event.target.removeAttribute("disable")
        }
    }

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
            {exerciseData && <ExerciseInfo
                exercises={exerciseData}
                session={props.session}
                handleWorkoutDoneClicked={handleWorkoutDoneClicked}
            />}
        </div>
    )
}

async function requestExerciseData(id) {
    const data = new FormData()
    data.append("TrainingID", Number(id))
    const url = `${APIBase}/ex/`
    try {
        const response = await fetch(url, {
            method: "POST",
            body: data,
        })

        if (response.ok) {
            const result = await response.json()
            return result
        }
        else {
            console.log("Training data request failed")
            return null
        }
    }
    catch (error) {
        console.error('Error:', error);
        return null
    }
}

async function requestWorkoutStatUpdate(workoutTime, exerciseCount) {
    const data = new FormData()
    data.append("email", getEmailCookie())
    data.append("TimeOfTraining", Number(workoutTime))
    data.append("CountOfExercise", Number(exerciseCount))
    const url = `${APIBase}/userupdate/`

    try {
        const response = await fetch(url, {
            method: "POST",
            body: data,
        })

        if (response.ok) {
            const result = await response.json()
            if (result.success) {
                console.log("Workout Stats Update Success!")
            }
            return result.success
        }
        else {
            console.log("Workout Stats Update Failed!")
            return false
        }
    }
    catch (error) {
        console.error('Error:', error);
        return false
    }
}

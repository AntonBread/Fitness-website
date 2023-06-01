import React from "react";

export default function WorkoutDoneButton(props) {
    return (
        <input
            className="workout-btn-done" 
            type="button"
            onClick={props.onClick}
            value="Завершить тренировку"
        />
    )
}
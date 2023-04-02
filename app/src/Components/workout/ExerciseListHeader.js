import React from "react";

export default function ExerciseListHeader() {
    return (
        <div className="workout-exercise">
            <div className="workout-exercise-property"></div>
            <div className="workout-exercise-property">Упражнение</div>
            <div className="workout-exercise-property">Описание?</div>
            <div className="workout-exercise-property">Группа мышц</div>
            <div className="workout-exercise-property">Кол-во повтор.</div>
            <div className="workout-exercise-property">Время</div>
        </div>
    )
}
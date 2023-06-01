import React from "react";
import { secondsToString } from "../../Scripts/converters";

export default function StatsAccum(props) {
    return (
        <div className="stats-content-accum-container">
            <div>
                <div className="stats-accum-value">{secondsToString(props.statData.totalTime)}</div>
                <div className="stats-accum-description">Суммарное время тренировок</div>
            </div>
            <div>
                <div className="stats-accum-value">{props.statData.totalExercises}</div>
                <div className="stats-accum-description">Количество выполненных упражнений</div>
            </div>
        </div>
    )
}
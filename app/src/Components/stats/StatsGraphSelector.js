import React from "react";

export default function StatsGraphSelector(props) {
    function onChartSelectionChanged(event) {
        props.setChartSelection(event.target.value)
    }

    return (
        <>
            <label className="stats-graph-selector-button">
                <input
                    type="radio"
                    name="chartSelection"
                    value="Weight"
                    checked={props.chartSelection === 'Weight'}
                    onChange={onChartSelectionChanged}
                />
                <span className="checkmark"></span>
                <div className="text">Вес</div>
            </label>
            <label className="stats-graph-selector-button">
                <input
                    type="radio"
                    name="chartSelection"
                    value="Breast"
                    checked={props.chartSelection === 'Breast'}
                    onChange={onChartSelectionChanged}
                />
                <span className="checkmark"></span>
                <div className="text">Грудь</div>
            </label>
            <label className="stats-graph-selector-button">
                <input
                    type="radio"
                    name="chartSelection"
                    value="Waist"
                    checked={props.chartSelection === 'Waist'}
                    onChange={onChartSelectionChanged}
                />
                <span className="checkmark"></span>
                <div className="text">Талия</div>
            </label>
            <label className="stats-graph-selector-button">
                <input
                    type="radio"
                    name="chartSelection"
                    value="Hips"
                    checked={props.chartSelection === 'Hips'}
                    onChange={onChartSelectionChanged}
                />
                <span className="checkmark"></span>
                <div className="text">Бёдра</div>
            </label>
        </>
    )
}
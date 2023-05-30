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
                    value="weight"
                    checked={props.chartSelection === 'weight'}
                    onChange={onChartSelectionChanged}
                />
                <span className="checkmark"></span>
                <div className="text">Вес</div>
            </label>
            <label className="stats-graph-selector-button">
                <input
                    type="radio"
                    name="chartSelection"
                    value="bustSize"
                    checked={props.chartSelection === 'bustSize'}
                    onChange={onChartSelectionChanged}
                />
                <span className="checkmark"></span>
                <div className="text">Грудь</div>
            </label>
            <label className="stats-graph-selector-button">
                <input
                    type="radio"
                    name="chartSelection"
                    value="waistSize"
                    checked={props.chartSelection === 'waistSize'}
                    onChange={onChartSelectionChanged}
                />
                <span className="checkmark"></span>
                <div className="text">Талия</div>
            </label>
            <label className="stats-graph-selector-button">
                <input
                    type="radio"
                    name="chartSelection"
                    value="hipsSize"
                    checked={props.chartSelection === 'hipsSize'}
                    onChange={onChartSelectionChanged}
                />
                <span className="checkmark"></span>
                <div className="text">Бёдра</div>
            </label>
        </>
    )
}
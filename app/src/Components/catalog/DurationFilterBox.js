import React from "react";

// Пределы времени для чекбоксов, в минутах
export const durationThresholds = [{
    lower: 1,
    upper: 6,
},
{
    lower: 7,
    upper: 10,
},
{
    lower: 11,
    upper: -1
}
]

export default function DurationFilter(props) {
    const durationCheckboxes = durationThresholds.map((threshold, index) => {
        const labelText = getLabelText(threshold)
        return (
            <div
                key={index}>
                <input
                    type="checkbox"
                    id={index}
                    name="durationThresholdsSelection"
                    checked={props.selectionData[index]}
                    onChange={props.handleFilterChange}>
                </input>
                <label>{labelText}</label>
            </div>
        )
    })
    return (
        <div className="catalog-filter-duration-container">
            {durationCheckboxes}
        </div>
    )
}

function getLabelText(threshold) {
    var labelText = `${threshold.lower}`
    labelText += (threshold.upper === -1) ? "+" : `–${threshold.upper}`
    labelText += " мин"
    return labelText
}

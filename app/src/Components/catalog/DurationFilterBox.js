import React from "react";

// Пределы времени для чекбоксов, в минутах
export const durationThresholds = [{
    lower: 1,
    upper: 6,
},
{
    lower: 7,
    upper: 9,
},
{
    lower: 10,
    upper: -1
}
]

export default function DurationFilter(props) {
    const durationCheckboxes = durationThresholds.map((threshold, index) => {
        const labelText = getLabelText(threshold)
        return (
            <div
                key={index}
                className="catalog-filter-box-check-container">
                <label className="catalog-filter-box-check">{labelText}
                    <input
                        type="checkbox"
                        id={index}
                        name="durationThresholdsSelection"
                        checked={props.selectionData[index]}
                        onChange={props.handleFilterChange}>
                    </input>
                    <span></span>
                </label>
            </div>
        )
    })
    return (
        <div className="catalog-filter-box-container">
            <div className="catalog-filter-box-title">Время</div>
            <div className="catalog-filter-box-checks-wrapper">
                {durationCheckboxes}
            </div>
        </div>
    )
}

function getLabelText(threshold) {
    var labelText = `${threshold.lower}`
    labelText += (threshold.upper === -1) ? "+" : `–${threshold.upper}`
    labelText += " мин"
    return labelText
}

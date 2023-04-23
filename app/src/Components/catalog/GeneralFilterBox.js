import React from "react";

export default function FilterBox(props) {
    const filterChecks = props.checks.map((item, index) => {
        return (
            <div
                key={index}>
                <input
                    type="checkbox"
                    id={index}
                    name={props.name}
                    checked={props.selectionArray[index]}
                    onChange={props.handleFilterChange}>
                </input>
                <label>{item.label}</label>
            </div>
        )
    })
    return (
        <div>
            <div>{props.title}</div>
            {filterChecks}
        </div>
    )
}

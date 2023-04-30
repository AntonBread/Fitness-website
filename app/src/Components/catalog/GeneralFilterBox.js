import React from "react";

export default function FilterBox(props) {
    const filterChecks = props.checks.map((item, index) => {
        return (
            <div
                key={index}
                className="catalog-filter-box-check-container">
                <label className="catalog-filter-box-check">{item.label}
                    <input
                        type="checkbox"
                        id={index}
                        name={props.name}
                        checked={props.selectionArray[index]}
                        onChange={props.handleFilterChange}>
                    </input>
                    <span></span>
                </label>

            </div>
        )
    })
    return (
        <div className="catalog-filter-box-container">
            <div className="catalog-filter-box-title">{props.title}</div>
            <div className="catalog-filter-box-checks-wrapper">
                {filterChecks}
            </div>
        </div>
    )
}

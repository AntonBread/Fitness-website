import React from "react";
import DurationFilterBox from "./DurationFilterBox";
import GeneralFilterBox from "./GeneralFilterBox";
import { FilterData } from "../../Scripts/workoutFilterData";

export default function SearchFilters(props) {
    const generalFilters = FilterData.map((data, index) => {
        return (
            <GeneralFilterBox 
                key={index}
                name={Object.keys(props.filterData)[index]}
                selectionArray={Object.values(props.filterData)[index]}
                checks={data.checks}
                title={data.title}
                handleFilterChange={props.handleFilterChange}
            />
        )
    })
    return (
        <div className="catalog-filter-container">
             {generalFilters}
            <DurationFilterBox
                selectionData={props.filterData.durationThresholdsSelection}
                handleFilterChange={props.handleFilterChange}
            />
        </div>
    )
}

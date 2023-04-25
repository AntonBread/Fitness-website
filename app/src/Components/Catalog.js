import React from "react"
import { useState } from "react"
import SearchBar from "./catalog/SearchBar"
import SearchFilters from "./catalog/SearchFilters"
import CatalogContent from "./catalog/CatalogContent"
import { durationThresholds } from "./catalog/DurationFilterBox"
import data from "./data"

export default function Catalog() {
    // Состояние строки поиска
    const [searchQuery, setSearchQuery] = useState("")
    // Фиксируем состояние в компоненте SearchBar
    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value)
    }

    // Состояние фильтра
    const [filterData, setFilterData] = useState(
        {
            inventorySelection: Array(3).fill(false),
            areaSelection: Array(3).fill(false),
            difficultySelection: Array(3).fill(false),
            durationThresholdsSelection: Array(durationThresholds.length).fill(false)
        }
    )
    // Фиксируем состояние в компоненте SearchFilters
    function handleFilterChange(event) {
        const { name, id } = event.target
        updateFilterState(setFilterData, id, name)
    }

    return (
        <div>
            <SearchBar
                query={searchQuery}
                handleQueryChange={handleSearchQueryChange}
            />
            <SearchFilters
                filterData={filterData}
                handleFilterChange={handleFilterChange}
            />
            <CatalogContent
                data={data}
                searchQuery={searchQuery}
                filterData={filterData}
            />
        </div>
    )
}

function updateFilterState(callback, index, name) {
    callback(prevFilterData => {
        return {
            ...prevFilterData,
            [name]: updateThresholdSelectionArray(prevFilterData[name], index),
        }
    })
}

function updateThresholdSelectionArray(previous, index) {
    previous[index] = !previous[index]
    return previous
}

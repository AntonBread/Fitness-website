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
        const { name, value, type, id } = event.target
        // Фильтрация по длительности тренировки осуществляется
        // установлением флажков, соответствующих определенному интервалу времени
        // Например:
        // 1 флажок отвечает за тренировки длительностью 1-10 минут
        // 2 флажок отвечает за тренировки длительностью 11-20 минут
        // Если чекнуть 1 и 2 флажки, то будут отображаться тренировки длительностью 1-20 минут
        if (type === "checkbox") {
            updateFilterStateDuration(setFilterData, id, name)
        }
        else {
            updateFilterStateGeneral(setFilterData, name, value)
        }
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

function updateFilterStateDuration(callback, index, name) {
    callback(prevFilterData => {
        return {
            ...prevFilterData,
            [name]: updateThresholdSelectionArray(prevFilterData[name], index),
        }
    })
}

function updateFilterStateGeneral(callback, name, value) {
    callback(prevFilterData => {
        return {
            ...prevFilterData,
            [name]: value
        }
    })
}

function updateThresholdSelectionArray(previous, index) {
    previous[index] = !previous[index]
    return previous
}
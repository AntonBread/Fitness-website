import React from "react"
import { useState, useEffect } from "react"
import SearchBar from "./catalog/SearchBar"
import CatalogTitle from "./catalog/CatalogTitle"
import SearchFilters from "./catalog/SearchFilters"
import CatalogContent from "./catalog/CatalogContent"
import { durationThresholds } from "./catalog/DurationFilterBox"
import { APIBase } from "./data"
//import data from "./data"

export default function Catalog() {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function executeRequest() {
            const result = await requestTrainingData()
            setData(result)
        }
        executeRequest()
    }, [])


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
        <div className="catalog-wallpaper">
            <div className="catalog-content-container">
                <SearchBar
                    query={searchQuery}
                    handleQueryChange={handleSearchQueryChange}
                />
                <CatalogTitle />
                <div className="catalog-workouts">
                    <SearchFilters
                        filterData={filterData}
                        handleFilterChange={handleFilterChange}
                    />
                    {data && <CatalogContent
                        data={data}
                        searchQuery={searchQuery}
                        filterData={filterData}
                    />}
                </div>
            </div>
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

async function requestTrainingData() {
    const url = `${APIBase}/training/`
    try {
        const response = await fetch(url, {
            method: "GET",
        })

        if (response.ok) {
            const result = await response.json()
            return result
        }
        else {
            console.log("Training data request failed")
            return null
        }
    }
    catch (error) {
        console.error('Error:', error);
        return null
    }
}

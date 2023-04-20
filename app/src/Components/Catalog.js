import React from "react"
import SearchBar from "./catalog/SearchBar"
import SearchFilters from "./catalog/SearchFilters"
import CatalogContent from "./catalog/CatalogContent"
import data from "./data"

export default function Catalog() {
    return (
        <div>
            <SearchBar />
            <SearchFilters />
            <CatalogContent 
                data={data}
            />
        </div>
    )
}
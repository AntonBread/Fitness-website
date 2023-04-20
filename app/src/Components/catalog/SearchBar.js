import React from "react";

export default function SearchBar() {
    return (
        <div className="searchbar-container">
            <i className="material-symbols-outlined">search</i>
            <input className="input-field" id="catalog-search" type="text" placeholder="Поиск"></input>
        </div>
    )
}
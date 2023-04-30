import React from "react";

export default function SearchBar(props) {
    return (
        <div className="searchbar-container">
            <i className="material-symbols-outlined">search</i>
            <input
                className="searchbar-input-field"
                id="catalog-search"
                type="text"
                placeholder="Поиск по тренировкам"
                value={props.query}
                onChange={props.handleQueryChange}>
            </input>
        </div>
    )
}

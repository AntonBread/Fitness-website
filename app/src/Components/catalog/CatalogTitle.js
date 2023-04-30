import React from "react";

const lineAlignStyle = {
    width: "43%",
    alignSelf: "center",
    marginLeft: "120px"
}

export default function CatalogTitle() {
    return (
        <div className="catalog-title-container">
            <div className="line" style={lineAlignStyle}></div>
            <h2 className="catalog-title-text">Тренировки</h2>
        </div>
    )
}
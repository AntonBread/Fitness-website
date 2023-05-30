import React, { useState } from "react";

export default function StatsList(props) {

    const [isEditMode, setEditMode] = useState(false)

    const listValueMarginStyle = {
        marginLeft: "129px",
        marginTop: "8px"
    }

    const listInputStyle = {
        textDecoration: isEditMode ? "underline" : "none"
    }

    function onStartEditModeClick() {
        setEditMode(true)
    }

    function onApplyEditChangesClick() {
        setEditMode(false)
        props.submitStatChanges()
    }

    function onCancelEditChangesClick() {
        setEditMode(false)
        props.cancelStatEdit()
    }

    return (
        <div className="stats-content-list-container">
            <div className="stats-content-list-item">
                <div>Рост</div>
                <div className="stats-content-list-input-value-wrapper">
                    <input
                        className="stats-content-list-value"
                        type="number"
                        name="height"
                        value={props.statData.height}
                        onChange={() => { return }}
                        disabled />
                    <label>см</label>
                </div>
            </div>
            <div className="stats-content-list-item">
                <div>Вес</div>
                <div className="stats-content-list-input-value-wrapper">
                    <input
                        className="stats-content-list-value"
                        style={listInputStyle}
                        type="number"
                        name="weight"
                        value={props.statData.weight}
                        onChange={props.handleStatDataChange}
                        disabled={!isEditMode} />
                    <label>кг</label>
                </div>
            </div>
            <div className="stats-content-list-item">
                <div>Обхват груди</div>
                <div className="stats-content-list-input-value-wrapper" style={listValueMarginStyle}>
                    <input
                        className="stats-content-list-value"
                        style={listInputStyle}
                        type="number"
                        name="bustSize"
                        value={props.statData.bustSize}
                        onChange={props.handleStatDataChange}
                        disabled={!isEditMode} />
                    <label>см</label>
                </div>
            </div>
            <div className="stats-content-list-item">
                <div>Обхват талии</div>
                <div className="stats-content-list-input-value-wrapper" style={listValueMarginStyle}>
                    <input
                        className="stats-content-list-value"
                        style={listInputStyle}
                        type="number"
                        name="waistSize"
                        value={props.statData.waistSize}
                        onChange={props.handleStatDataChange}
                        disabled={!isEditMode} />
                    <label>см</label>
                </div>
            </div>
            <div className="stats-content-list-item">
                <div>Обхват бёдер</div>
                <div className="stats-content-list-input-value-wrapper" style={listValueMarginStyle}>
                    <input
                        className="stats-content-list-value"
                        style={listInputStyle}
                        type="number"
                        name="hipsSize"
                        value={props.statData.hipsSize}
                        onChange={props.handleStatDataChange}
                        disabled={!isEditMode} />
                    <label>см</label>
                </div>
            </div>
            <div className="stats-content-list-item">
                <div>Обхват бедра</div>
                <div className="stats-content-list-input-value-wrapper" style={listValueMarginStyle}>
                    <input
                        className="stats-content-list-value"
                        style={listInputStyle}
                        type="number"
                        name="singleHipSize"
                        value={props.statData.singleHipSize}
                        onChange={props.handleStatDataChange}
                        disabled={!isEditMode} />
                    <label>см</label>
                </div>
            </div>

            <div>
                {!isEditMode &&
                    <button className="stats-button-edit-begin" onClick={onStartEditModeClick}>
                        <i className="material-symbols-outlined">edit</i>
                    </button>
                }
                {isEditMode &&
                    <button className="stats-button-edit-end stats-button-edit-apply" onClick={onApplyEditChangesClick}>
                        Применить
                    </button>
                }
                {isEditMode &&
                    <button className="stats-button-edit-end stats-button-edit-cancel" onClick={onCancelEditChangesClick}>
                        Отмена
                    </button>
                }
            </div>
        </div>
    )
}
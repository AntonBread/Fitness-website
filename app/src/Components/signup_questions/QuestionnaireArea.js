import React from "react";
import image from "../../img/questionnaire/3.png"

export default function QuestionnaireArea(props) {

    const titleMarginsStyle = {
        marginTop: "78px",
        marginLeft: "59px",
        marginRight: "262px"
    }

    const inputsContainerStyle = {
        display: "flex",
        flexDirection: "column",
        rowGap: "65px",
        marginTop: "90px",
        marginLeft: "72px",
        marginBottom: "125px",
        marginRight: "275px",
    }

    const imageStyle = {
        position: "absolute",
        right: 0
    }

    function onCheckChange(event) {
        props.setAreInputsEmpty(false)
        const { name, checked } = event.target
        props.handleDataChange(name, checked)
    }

    return (
        <>
            <div className="signup-questionnaire-body-title" style={titleMarginsStyle}>
                Что хотите проработать?
            </div>
            <div style={inputsContainerStyle}>
                <label className="signup-questionnaire-checkbox">
                    <input
                        type="checkbox"
                        name="areaArms"
                        value={props.data.areaArms}
                        onChange={onCheckChange}
                    />
                    <span className="checkmark"></span>
                    Руки
                </label>

                <label className="signup-questionnaire-checkbox">
                    <input
                        type="checkbox"
                        name="areaCore"
                        value={props.data.areaCore}
                        onChange={onCheckChange}
                    />
                    <span className="checkmark"></span>
                    Пресс
                </label>

                <label className="signup-questionnaire-checkbox">
                    <input
                        type="checkbox"
                        name="areaLegs"
                        value={props.data.areaLegs}
                        onChange={onCheckChange}
                    />
                    <span className="checkmark"></span>
                    Ягодицы и ноги
                </label>
            </div>
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
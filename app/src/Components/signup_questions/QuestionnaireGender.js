import React from "react";
import image from "../../img/questionnaire/9.png"

export default function QuestionnaireGender(props) {

    const titleMarginsStyle = {
        marginTop: "36px",
        marginLeft: "82px",
        marginRight: "198px"
    }

    const inputsContainerStyle = {
        display: "flex",
        flexDirection: "column",
        rowGap: "38px",
        marginTop: "165px",
        marginLeft: "60px",
        marginBottom: "250px",
        marginRight: "350px",
    }

    const imageStyle = {
        position: "absolute",
        right: 0
    }

    function onGenderSelect(event) {
        props.setAreInputsEmpty(false)
        props.handleDataChange("gender", Number(event.target.value))
    }

    return (
        <>
            <div className="signup-questionnaire-body-title" style={titleMarginsStyle}>
                Какого вы пола?
            </div>
            <div style={inputsContainerStyle}>
                <label className="signup-questionnaire-radio-button">
                    <input
                        type="radio"
                        name="goal"
                        value="1"
                        onChange={onGenderSelect}
                    />
                    <span className="checkmark"></span>
                    Мужской
                </label>

                <label className="signup-questionnaire-radio-button">
                    <input
                        type="radio"
                        name="goal"
                        value="0"
                        onChange={onGenderSelect}
                    />
                    <span className="checkmark"></span>
                    Женский
                </label>
            </div>
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
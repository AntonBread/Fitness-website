import React from "react";

export default function QuestionnaireTime(props) {

    const image = process.env.PUBLIC_URL + `/questionnaire/2.png`

    function onInputChange(event) {
        props.setAreInputsEmpty(event.target.value.length === 0)
        let value = event.target.value === '' ? -1 : Number(event.target.value)
        props.handleDataChange("time", value)
    }

    const inputMarginsStyle = {
        marginTop: "80px",
        marginLeft: "93px",
        marginBottom: "220px",
        width: "200px",
    }

    const imageStyle = {
        position: "absolute",
        right: 0
    }

    return (
        <>
            <div className="signup-questionnaire-body-title signup-questionnaire-body-title-time">
                Сколько минут вы готовы уделять на одну тренировку?
            </div>
            <input
                name="time"
                type="number"
                className="signup-questionnaire-number-input"
                onKeyDown={(evt) => ["e", "E", "+", "-", ".", ","].includes(evt.key) && evt.preventDefault()}
                style={inputMarginsStyle}
                onChange={onInputChange}
            />
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
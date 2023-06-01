import React from "react";

export default function QuestionnaireAge(props) {

    const image = process.env.PUBLIC_URL + `/questionnaire/8.png`

    const titleMarginsStyle = {
        marginTop: "36px",
        marginLeft: "82px",
        marginRight: "198px"
    }

    const imageStyle = {
        position: "absolute",
        top: "36px",
        right: 0
    }

    const inputMarginsStyle = {
        marginTop: "107px",
        marginLeft: "20px",
        marginBottom: "320px",
        width: "160px",
    }

    function onInputChange(event) {
        props.setAreInputsEmpty(event.target.value.length === 0)
        const value = event.target.value === '' ? -1 : Number(event.target.value)
        props.handleDataChange("age", value)
    }

    return (
        <>
            <div className="signup-questionnaire-body-title" style={titleMarginsStyle}>
                Укажите свой возраст
            </div>
            <div>
                <input
                    name="age"
                    type="number"
                    onKeyDown={(evt) => ["e", "E", "+", "-", ".", ","].includes(evt.key) && evt.preventDefault()}
                    className="signup-questionnaire-number-input"
                    style={inputMarginsStyle}
                    onChange={onInputChange}
                />
                <label className="signup-questionnaire-number-input-label">лет</label>
            </div>
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
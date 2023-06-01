import React from "react";

export default function QuestionnaireWeight(props) {

    const image = process.env.PUBLIC_URL + `/questionnaire/7.png`

    const titleMarginsStyle = {
        marginTop: "68px",
        marginLeft: "28px",
        marginRight: "252px"
    }

    const imageStyle = {
        position: "absolute",
        right: 0
    }

    const inputMarginsStyle = {
        marginTop: "82px",
        marginLeft: "40px",
        marginBottom: "340px",
        width: "160px",
    }

    function onInputChange(event) {
        props.setAreInputsEmpty(event.target.value.length === 0)
        const value = event.target.value === '' ? -1 : Number(event.target.value)
        props.handleDataChange("weight", value)
    }

    return (
        <>
            <div className="signup-questionnaire-body-title" style={titleMarginsStyle}>
                Какой у вас вес?
            </div>
            <div>
                <input
                    name="weight"
                    type="number"
                    onKeyDown={(evt) => ["e", "E", "+", "-", ".", ","].includes(evt.key) && evt.preventDefault()}
                    className="signup-questionnaire-number-input"
                    style={inputMarginsStyle}
                    onChange={onInputChange}
                />
                <label className="signup-questionnaire-number-input-label">кг</label>
            </div>
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
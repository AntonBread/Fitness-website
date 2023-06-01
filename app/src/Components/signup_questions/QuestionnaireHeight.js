import React from "react";

export default function QuestionnaireHeight(props) {

    const image = process.env.PUBLIC_URL + `/questionnaire/6.png`

    const titleMarginsStyle = {
        marginTop: "45px",
        marginLeft: "58px",
        marginRight: "174px"
    }

    const inputMarginsStyle = {
        marginTop: "100px",
        marginLeft: "85px",
        marginBottom: "325px",
        width: "235px",
    }

    const imageStyle = {
        position: "absolute",
        right: 0
    }

    function onInputChange(event) {
        props.setAreInputsEmpty(event.target.value.length === 0)
        const value = event.target.value === '' ? -1 : Number(event.target.value)
        props.handleDataChange("height", value)
    }

    return (
        <>
            <div className="signup-questionnaire-body-title" style={titleMarginsStyle}>
                Укажите свой рост
            </div>
            <div>
                <input
                    name="height"
                    type="number"
                    onKeyDown={(evt) => ["e", "E", "+", "-", ".", ","].includes(evt.key) && evt.preventDefault()}
                    className="signup-questionnaire-number-input"
                    style={inputMarginsStyle}
                    onChange={onInputChange}
                />
                <label className="signup-questionnaire-number-input-label">см</label>
            </div>
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
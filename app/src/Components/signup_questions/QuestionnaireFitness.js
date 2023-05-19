import React from "react";
import image from "../../img/questionnaire/10.png"

export default function QuestionnaireFitness(props) {

    const titleMarginsStyle = {
        marginTop: "18px",
        marginLeft: "116px",
        marginRight: "116px"
    }

    const inputContainerStyle = {
        margin: "0 auto",
        marginTop: "62px",
        marginBottom: "410px",
        width: "385px",
        position: "relative"
    }

    const inputStyle = {
        width: "100%",
        height: "4px",
        backgroundColor: "white"
    }

    const labelLeftStyle = {
        position: "absolute",
        top: "24px",
        left: "-40px",
        fontSize: "1.25rem",
        textAlign: "center",
        width: "170px"
    }

    const labelRightStyle = {
        position: "absolute",
        top: "24px",
        right: "-60px",
        fontSize: "1.25rem",
        textAlign: "center",
        width: "150px"
    }

    const imageStyle = {
        position: "absolute",
        bottom: 0
    }

    function onInputChange(event) {
        props.setAreInputsEmpty(false)
        const { name, value } = event.target
        props.handleDataChange(name, Number(value))
    }

    return (
        <>
            <div className="signup-questionnaire-body-title" style={titleMarginsStyle}>
                В какой вы физической форме?
            </div>
            <div style={inputContainerStyle}>
                <input
                    className="signup-questionnaire-seekbar"
                    name="fitnessLevel"
                    style={inputStyle}
                    type="range"
                    min={0}
                    max={2}
                    onChange={onInputChange}
                />
                <label style={labelLeftStyle}>Плохой</label>
                <label style={labelRightStyle}>Отличной</label>
            </div>
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
import React from "react";

export default function QuestionnaireGirths(props) {

    const image = process.env.PUBLIC_URL + `/questionnaire/4.png`

    const titleMarginsStyle = {
        marginTop: "44px",
        marginLeft: "45px",
        marginRight: "246px"
    }

    const inputsContainerStyle = {
        display: "flex",
        flexDirection: "column",
        rowGap: "50px",
        marginTop: "56px",
        marginLeft: "42px",
        marginBottom: "32px",
        marginRight: "330px",
        fontSize: "1.5rem"
    }

    const imageStyle = {
        position: "absolute",
        right: 0
    }

    function onInputChange(event) {
        props.setAreInputsEmpty(false)
        const { name } = event.target
        const value = event.target.value === '' ? -1 : Number(event.target.value)
        props.handleDataChange(name, value)
    }

    return (
        <>
            <div className="signup-questionnaire-body-title" style={titleMarginsStyle}>
                Какие сейчас у вас обхваты?
            </div>
            <div style={inputsContainerStyle}>
                <div>
                    Обхват груди
                    <input
                        className="signup-questionnaire-girth-input"
                        name="bustSize"
                        type="number"
                        onKeyDown={(evt) => ["e", "E", "+", "-", ".", ","].includes(evt.key) && evt.preventDefault()}
                        onChange={onInputChange}
                    />
                    <label className="signup-questionnaire-girth-input-label">см</label>
                </div>

                <div>
                    Обхват талии
                    <input
                        className="signup-questionnaire-girth-input"
                        name="waistSize"
                        type="number"
                        onKeyDown={(evt) => ["e", "E", "+", "-", ".", ","].includes(evt.key) && evt.preventDefault()}
                        onChange={onInputChange}
                    />
                    <label className="signup-questionnaire-girth-input-label">см</label>
                </div>

                <div>
                    Обхват бёдер
                    <input
                        className="signup-questionnaire-girth-input"
                        name="hipsSize"
                        type="number"
                        onKeyDown={(evt) => ["e", "E", "+", "-", ".", ","].includes(evt.key) && evt.preventDefault()}
                        onChange={onInputChange}
                    />
                    <label className="signup-questionnaire-girth-input-label">см</label>
                </div>

                <div>
                    Обхват бедра
                    <input
                        className="signup-questionnaire-girth-input"
                        name="singleHipSize"
                        type="number"
                        onKeyDown={(evt) => ["e", "E", "+", "-", ".", ","].includes(evt.key) && evt.preventDefault()}
                        onChange={onInputChange}
                    />
                    <label className="signup-questionnaire-girth-input-label">см</label>
                </div>
            </div>
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
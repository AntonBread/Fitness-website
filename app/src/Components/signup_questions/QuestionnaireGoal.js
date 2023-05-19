import React from "react";
import image from "../../img/questionnaire/1.png"

export default function QuestionnaireGoal(props) {

    function onGoalSelect(event) {
        props.setAreInputsEmpty(false)
        props.handleDataChange("goal", Number(event.target.value))
    }

    const imageStyle = {
        position: "absolute",
        right: 0
    }

    return (
        <>
            <div className="signup-questionnaire-body-title signup-questionnaire-body-title-goal">
                Какая у вас главная цель?
            </div>
            <div className="signup-questionnaire-goal-inputs-container">
                <label className="signup-questionnaire-radio-button">
                    <input
                        type="radio"
                        name="goal"
                        value="0"
                        onChange={onGoalSelect}
                    />
                    <span className="checkmark"></span>
                    Сбросить вес
                </label>

                <label className="signup-questionnaire-radio-button">
                    <input
                        type="radio"
                        name="goal"
                        value="1"
                        onChange={onGoalSelect}
                    />
                    <span className="checkmark" style={{ top: "22px" }}></span>
                    Набрать мышечную массу
                </label>

                <label className="signup-questionnaire-radio-button">
                    <input
                        type="radio"
                        name="goal"
                        value="2"
                        onChange={onGoalSelect}
                    />
                    <span className="checkmark" style={{ top: "11px" }}></span>
                    Поддерживать себя в тонусе
                </label>
            </div>
            <img src={image} alt="no" style={imageStyle}></img>
        </>
    )
}
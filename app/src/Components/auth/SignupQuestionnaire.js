import React, { useState } from "react";
import QuestionnaireBody from "./QuestionnaireBody";

export default function SignupQuestionnaire(props) {

    const questionCount = props.stage - 2

    const [areInputsEmpty, setAreInputsEmpty] = useState(true)

    const submitButtonStyle = {
        background: areInputsEmpty ? "#bbb" : "#603D76",
        color: areInputsEmpty ? "black" : "white"
    }

    var submitButtonText = areInputsEmpty ? "Пропустить" : "Следующее"
    if (props.stage > 10) {
        submitButtonText = "Завершить"
    }

    return (
        <div className="signup-form-container">
            <div className="signup-questionnaire-header">Заполнение анкеты</div>
            <QuestionnaireBody
                count={questionCount}
                data={props.questionnaireData}
                handleDataChange={props.handleQuestionnaireDataChange}
                setAreInputsEmpty={setAreInputsEmpty}
            />
            <div className="signup-form-submit">
                <input
                    style={submitButtonStyle}
                    className="signup-questionnaire-submit-btn"
                    type="button"
                    value={submitButtonText}
                    onClick={onSubmitButtonClick}
                />
            </div>
        </div>
    )

    function onSubmitButtonClick() {
        if (props.stage <= 10) {
            props.handleStageNext()
            setAreInputsEmpty(true)
        }
        else {
            props.handleSubmit()
        } 
    }

}
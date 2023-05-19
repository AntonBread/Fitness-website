import React from "react";

export default function SignupQuestionsOffer(props) {
    return (
        <div className="signup-questionnaire-offer-container">
            <div className="signup-questionnaire-offer-text">Хотите пройти небольшой опрос?<br/>
            Это поможет персонализировать контент на сайте специально для Вас.<br/>
            Данные всегда заполнить или изменить позже.</div>
            <div className="signup-questionnaire-offer-buttons-container">
                <input
                    className="signup-questionnaire-offer-button signup-questionnaire-offer-refuse"
                    type="button"
                    value="Завершить регистрацию"
                    onClick={props.handleRefuse} />
                <input
                    className="signup-questionnaire-offer-button signup-questionnaire-offer-accept"
                    type="button"
                    value="Пройти сейчас"
                    onClick={props.handleAccept} />
            </div>
        </div>
    )

}
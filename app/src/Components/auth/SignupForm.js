import React from "react";
import SignupFormBody from "./SignupFormBody";
import SignupFormFinish from "./SignupFormFinish";

export default function SignupForm(props) {
    return (
        <div className="signup-form-container">
            <div className="signup-form-header">Регистрация</div>
            <SignupFormBody
                formData={props.formData}
                handleFormDataChange={props.handleFormDataChange}
            />
            <SignupFormFinish
                formData={props.formData}
                onClick={props.finishFormFillUp}
            />
        </div>
    )
}
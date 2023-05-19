import React from "react";
import { validateEmail, validatePasswords } from "../../Scripts/validators";

export default function SignupFormFinish(props) {
    const submitEnabled = isFormInputValid(props.formData)

    return (
        <div className="signup-form-submit">
            <input
                className="signup-form-submit-btn"
                type="button"
                value="Далее"
                disabled={!submitEnabled}
                onClick={props.onClick}
            />
        </div>
    )
}

function isFormInputValid(formData) {
    let isAgreementChecked = formData.agreementChecked
    let isEmailValid = validateEmail(formData.email)
    let isPasswordValid = validatePasswords(formData.password, formData.passwordConfirm)
    return (isAgreementChecked && isEmailValid && isPasswordValid)
}
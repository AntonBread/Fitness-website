import React from "react";
import { validateEmail } from "../../Scripts/validators";

export default function LoginSubmit(props) {
    const submitEnabled = isFormInputValid(props.formData)

    return (
        <div className="login-form-submit">
            <input
                className="login-form-submit-btn"
                type="button"
                value="Войти"
                disabled={!submitEnabled}
                onClick={props.onClick}
            />
        </div>
    )
}

function isFormInputValid(formData) {
    if (!validateEmail(formData.email)) {
        return false
    }
    if (formData.password.length < 2) {
        return false
    }
    return true
}

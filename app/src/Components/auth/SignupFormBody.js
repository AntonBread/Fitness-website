import React from "react";

export default function SignupFormBody(props) {
    return (
        <form className="signup-form">
            <div className="signup-form-item">
                <label>Почта</label>
                <input
                    className="signup-form-input-text"
                    name="email"
                    type="email"
                    placeholder="Введите почту"
                    value={props.formData.email}
                    onChange={props.handleFormDataChange}
                />
            </div>

            <div className="signup-form-item">
                <label>Пароль</label>
                <input
                    className="signup-form-input-text"
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                    value={props.formData.password}
                    onChange={props.handleFormDataChange}
                />
            </div>

            <div className="signup-form-item">
                <label>Подтвердите пароль</label>
                <input
                    className="signup-form-input-text"
                    name="passwordConfirm"
                    type="password"
                    placeholder="Введите пароль"
                    value={props.formData.passwordConfirm}
                    onChange={props.handleFormDataChange}
                />
            </div>

            <label className="signup-form-agreement">
                <input type="checkbox"
                    name="agreementChecked"
                    checked={props.formData.agreementChecked}
                    onChange={props.handleFormDataChange} />
                <span className="signup-agreement-checkmark"></span>
                Согласие на обработку персональных данных
            </label>
        </form>
    )
}
import React from "react";

export default function LoginForm(props) {
    return (
        <form className="login-form">
            <div className="login-form-item">
                <label>Почта</label>
                <input
                    className="login-form-input-text"
                    name="email"
                    type="email"
                    placeholder="Введите почту"
                    value={props.formData.email}
                    onChange={props.handleFormDataChange}
                />
            </div>

            <div className="login-form-item">
                <label>Пароль</label>
                <input
                    className="login-form-input-text"
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                    value={props.formData.password}
                    onChange={props.handleFormDataChange}
                />
            </div>
        </form>
    )
}
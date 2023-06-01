import React from "react";
import { useState, useEffect } from "react";
import LoginForm from "./auth/LoginForm";
import LoginSubmit from "./auth/LoginSubmit";
import { APIBase } from "./data";
import { useNavigate } from "react-router-dom";

export default function Login(props) {

    const navigate = useNavigate()

    useEffect(() => {
        if (props.session) navigate("/personal")
    })

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleFormDataChange(event) {
        const { name, value } = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    async function submitLoginRequest() {
        const parcel = new FormData()
        parcel.append("email", formData.email)
        parcel.append("password", formData.password)

        const url = `${APIBase}/email-password/`

        try {
            const response = await fetch(url, {
                method: "POST",
                body: parcel,
                credentials: 'same-origin',
            })

            if (response.ok) {
                const result = await response.json()
                console.log(result)
                if (!result.valid) return
                document.cookie = `session_token=${formData.email};expires=Thu, 01 Jan 2024 00:00:01 GMT`
                props.setSession(result.valid)
                navigate("/catalog")
            }
            else {
                console.log("Login check request failed")
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="login-wallpaper">
            <div className="login-form-container">
                <div className="login-form-header">Вход</div>
                <LoginForm
                    formData={formData}
                    handleFormDataChange={handleFormDataChange}
                />
                <LoginSubmit
                    formData={formData}
                    onClick={submitLoginRequest}
                />
            </div>
        </div>
    )
}
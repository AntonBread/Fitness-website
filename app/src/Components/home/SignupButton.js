import React from "react";
import { Link } from "react-router-dom";

export default function SignupButton() {
    return (
        <div className="home-btn-signup-container">
            <Link className="home-btn-signup" to="/signup">
                Регистрация
            </Link>
        </div>
    )
}
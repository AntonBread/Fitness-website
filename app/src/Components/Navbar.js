import React from "react";
import { Link, useNavigate } from "react-router-dom"

export default function Navbar(props) {

    const navigate = useNavigate()

    function onLogoutClick(event) {
        document.cookie = "session_token=1;expires=Thu, 01 Jan 1970 00:00:01 GMT"
        props.setSession(false)
        navigate("/")
    }

    const logoutButtonStyle = {
        cursor: "pointer",
        background: "transparent",
        border: "none",
        outline: "none",
    }

    return (
        <div className="nav-wrapper">
            <nav>
                <Link className="nav-title" to="/">FITNESS-WEBSITE</Link>
                <Link className="nav-link" to="/catalog">Каталог</Link>
                {props.session && <Link className="nav-link" to="/stats">Статистика</Link>}
                {props.session && <Link className="nav-link" to="/personal">Персональная страница</Link>}
                {props.session && <input
                    style={logoutButtonStyle}
                    className="nav-link"
                    type="button"
                    value="Выход"
                    onClick={onLogoutClick}
                />}
                {!props.session && <Link className="nav-link" to="/login">Войти</Link>}
            </nav>
        </div>
    )
}

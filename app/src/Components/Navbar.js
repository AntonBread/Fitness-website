import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="nav-wrapper">
            <nav>
                <Link className="nav-title" to="/">FITNESS-WEBSITE</Link>
                <Link className="nav-link" to="/catalog">Каталог</Link>
                <Link className="nav-link" to="/stats">Статистика</Link>
                <Link className="nav-link" to="/personal">Персональная страница</Link>
            </nav>
        </div>
    )
}

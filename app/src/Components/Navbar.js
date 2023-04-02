import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <Link className="nav-title" to="/">FITNESS WEBSITE</Link>
            <Link to="/workout">Тренировка</Link>
            <Link to="/catalog">Каталог</Link>
            <Link to="/stats">Статистика</Link>
            <Link to="/personal">Персональная страница</Link>
        </nav>
    )
}
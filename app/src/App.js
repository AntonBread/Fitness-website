import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Workout from "./Components/Workout";
import Catalog from "./Components/Catalog";
import Stats from "./Components/Stats";
import Personal from "./Components/Personal";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/workout" element={<Workout />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/personal" element={<Personal />} />
                </Routes>
            </div>
        </Router>
    );
}

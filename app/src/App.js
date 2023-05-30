import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Workout from "./Components/Workout";
import Catalog from "./Components/Catalog";
import Stats from "./Components/Stats";
import Personal from "./Components/Personal";
import Signup from "./Components/Signup";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import loginCheck from "./Scripts/auth";

export default function App() {

    const [session, setSession] = useState(false)

    useEffect(() => {
        async function execLoginCheck() {
            const result = await loginCheck()
            setSession(result)
        }
        execLoginCheck()
    }, [])

    if (session) {
        console.log("SESSION ONLINE")
    }
    else {
        console.log("SESSION NONE")
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Navbar
                    session={session}
                    setSession={setSession}
                />
                <Routes>
                    <Route exact path="/" element={<Home session={session} />} />
                    <Route path="/workout" element={<Workout session={session} />} />
                    <Route path="/catalog" element={<Catalog session={session} />} />
                    <Route path="/stats" element={<Stats session={session} />} />
                    <Route path="/personal" element={<Personal session={session} />} />
                    <Route path="/signup" element={<Signup session={session} setSession={setSession} />} />
                    <Route path="/login" element={<Login session={session} setSession={setSession} />} />
                </Routes>
            </div>
        </Router>
    );
}

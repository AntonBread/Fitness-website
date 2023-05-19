import React, { useEffect } from "react";
import HomeSlider from "./home/HomeSlider";
import SignupButton from "./home/SignupButton";
import { homeImages } from "./data";
import { useNavigate } from "react-router-dom";

export default function Home(props) {

    const navigate = useNavigate()

    useEffect(() => {
        if (props.session) navigate("/catalog")
    })

    return (
        <div className="home-wallpaper">
            <div className="home-container">
                <HomeSlider images={homeImages} />
                <SignupButton />
            </div>
        </div>
    )
}

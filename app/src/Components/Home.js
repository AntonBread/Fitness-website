import React, { useEffect } from "react";
import HomeSlider from "./home/HomeSlider";
import SignupButton from "./home/SignupButton";
import { useNavigate } from "react-router-dom";

export default function Home(props) {

    const navigate = useNavigate()

    useEffect(() => {
        if (props.session) navigate("/catalog")
    })

    function importAll(r) {
        return r.keys().map(r);
    }
    const sliderImages = importAll(require.context('../img/home', true, /\.(png|jpe?g|svg)$/));

    return (
            <div className="home-container">
                <HomeSlider images={sliderImages} />
                <SignupButton />
            </div>
    )
}

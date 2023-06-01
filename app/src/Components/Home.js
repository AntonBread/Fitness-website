import React, { useEffect } from "react";
import HomeSlider from "./home/HomeSlider";
import SignupButton from "./home/SignupButton";
import { useNavigate } from "react-router-dom";

export default function Home(props) {

    const navigate = useNavigate()

    useEffect(() => {
        if (props.session) navigate("/catalog")
    })

    const image1 = process.env.PUBLIC_URL + 'home/1.jpg'
    const image2 = process.env.PUBLIC_URL + 'home/2.jpg'
    const image3 = process.env.PUBLIC_URL + 'home/3.jpg'
    const sliderImages = [image1, image2, image3]

    return (
            <div className="home-container">
                <HomeSlider images={sliderImages} />
                <SignupButton />
            </div>
    )
}

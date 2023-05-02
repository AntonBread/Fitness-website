import React from "react";
import HomeSlider from "./home/HomeSlider";
import { homeImages } from "./data";

export default function Home() {

    return (
        <div className="home-wallpaper">
            <div className="home-container">
                <HomeSlider images={homeImages}/>
            </div>
        </div>
    )
}

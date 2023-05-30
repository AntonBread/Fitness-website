import React, { useEffect } from "react";
import RecommendedWorkouts from "./personal/RecommendedWorkouts";
import RecommendedLinks from "./personal/RecommendedLinks";
import { recommendedLinks } from "./data";
import { useNavigate } from "react-router-dom";

export default function Personal(props) {
    
    const navigate = useNavigate()

    useEffect(() => {
        if (!props.session) navigate("/")
    })

    return (
        <div>
            <RecommendedWorkouts />
            <RecommendedLinks
                links={recommendedLinks}
            />
        </div>
    )
}

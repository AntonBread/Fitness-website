import React from "react";
import RecommendedWorkouts from "./personal/RecommendedWorkouts";
import RecommendedLinks from "./personal/RecommendedLinks";
import { recommendedLinks } from "./data";

export default function Personal() {
    return (
        <div>
            <RecommendedWorkouts />
            <RecommendedLinks
                links={recommendedLinks}
            />
        </div>
    )
}

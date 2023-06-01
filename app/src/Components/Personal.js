import React, { useEffect, useState } from "react";
import RecommendedWorkouts from "./personal/RecommendedWorkouts";
import RecommendedLinks from "./personal/RecommendedLinks";
import { useNavigate } from "react-router-dom";
import { APIBase } from "./data";

export default function Personal(props) {
    
    const navigate = useNavigate()

    useEffect(() => {
        if (!props.session) navigate("/")

        async function executeRequest() {
            const links = await requestLinkData()
            const trainings = await requestTrainingData()
            const result = [links, trainings]
            setRecommendedData(result)
        }
        executeRequest()
    }, [])

    const [recommendedData, setRecommendedData] = useState(null)

    console.log(recommendedData)

    return (
        <div>
            {recommendedData && <RecommendedWorkouts 
                workoutData={recommendedData[1]}
            />}
            {recommendedData && <RecommendedLinks
                links={recommendedData[0]}
            />}
        </div>
    )
}

async function requestLinkData() {
    const url = `${APIBase}/link/`
    try {
        const response = await fetch(url, {
            method: "POST",
        })

        if (response.ok) {
            const result = await response.json()
            return result
        }
        else {
            console.log("Training data request failed")
            return null
        }
    }
    catch (error) {
        console.error('Error:', error);
        return null
    }
}

async function requestTrainingData() {
    const url = `${APIBase}/randtrain/`
    try {
        const response = await fetch(url, {
            method: "POST",
        })

        if (response.ok) {
            const result = await response.json()
            return result
        }
        else {
            console.log("Training data request failed")
            return null
        }
    }
    catch (error) {
        console.error('Error:', error);
        return null
    }
}

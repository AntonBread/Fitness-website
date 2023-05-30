import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import StatsList from "./stats/StatsList"
import StatsAccum from "./stats/StatsAccum"
import StatsGraph from "./stats/StatsGraph"
import { APIBase } from "./data"
import { statGraphData } from "./data"

export default function Stats(props) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.session) navigate("/")
    })

    const initialStatData = {
        height: 170,
        weight: 60,
        bustSize: 90,
        waistSize: 60,
        hipsSize: 90,
        singleHipSize: 40,
        totalTime: 120,
        totalExercises: 23
    }

    const [statData, setStatData] = useState({
        ...initialStatData
    })

    function handleStatDataChange(event) {
        const { name, value } = event.target
        setStatData(prev => {
            return {
                ...prev,
                [name]: Number(value),
            }
        })
    }

    function cancelStatEdit() {
        setStatData(initialStatData)
    }

    function submitStatChanges() {
        // TODO: write the actual function!
    }

    const lineStyle = {
        width: "208px",
        marginBottom: "40px"
    }

    return (
        <div className="stats-wallpaper">
            <div className="stats-container">
                <div className="line" style={lineStyle}></div>
                <div className="stats-content-container">
                    <StatsList
                        statData={statData}
                        handleStatDataChange={handleStatDataChange}
                        cancelStatEdit={cancelStatEdit}
                        submitStatChanges={submitStatChanges}
                    />
                    <StatsAccum
                        statData={statData} />
                    <StatsGraph
                        data={statGraphData}
                    />
                </div>
            </div>
        </div>
    )
}

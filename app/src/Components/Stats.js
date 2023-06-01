import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import StatsList from "./stats/StatsList"
import StatsAccum from "./stats/StatsAccum"
import StatsGraph from "./stats/StatsGraph"
import { APIBase } from "./data"
import { getEmailCookie } from "../Scripts/auth"

export default function Stats(props) {

    const navigate = useNavigate()

    const [update, setUpdate] = useState(0)

    useEffect(() => {
        if (!props.session) navigate("/")

        async function getStatsData() {
            const result = await requestUserStats(getEmailCookie())
            setStatRequestData(result)
        }
        getStatsData()
    }, [update])

    const [statRequestData, setStatRequestData] = useState(null)

    console.log(statRequestData)

    const [initialStatData, setInitialStatData] = useState(null)

    const [statData, setStatData] = useState(null)

    useEffect(() => {
        if (statRequestData === null) return
        const lastStatRecord = statRequestData[0].slice(-1)[0]
        const accumStatRecord = statRequestData[1][0]
        const stats = {
            weight: lastStatRecord["Weight"],
            bustSize: lastStatRecord["Breast"],
            waistSize: lastStatRecord["Waist"],
            hipsSize: lastStatRecord["Hips"],
            singleHipSize: lastStatRecord["Legs"],
            totalTime: accumStatRecord["TimeOfTraining"],
            totalExercises: accumStatRecord["CountOfExercise"]
        }
        setInitialStatData(stats)
    }, [statRequestData])

    useEffect(() => {
        if (initialStatData === null) return
        setStatData(initialStatData)
    }, [initialStatData])

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

    async function submitStatChanges() {
        const data = new FormData()
        data.append("UserEmail", getEmailCookie())
        data.append("Weight", statData.weight)
        data.append("Breast", statData.bustSize)
        data.append("Waist", statData.waistSize)
        data.append("Hips", statData.hipsSize)
        data.append("Legs", statData.singleHipSize)
        const url = `${APIBase}/statinsert/`

        try {
            const response = await fetch(url, {
                method: "POST",
                body: data,
            })

            if (response.ok) {
                console.log("User Stats Update Success!")
                setUpdate(prev => prev + 1)
            }
            else {
                console.log("User Stats Update Failed!")
                return false
            }
        }
        catch (error) {
            console.error('Error:', error);
            return false
        }
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
                    {statData && <StatsList
                        statData={statData}
                        handleStatDataChange={handleStatDataChange}
                        cancelStatEdit={cancelStatEdit}
                        submitStatChanges={submitStatChanges}
                    />}
                    {statData && <StatsAccum
                        statData={statData} />}
                    {statRequestData && <StatsGraph
                        data={statRequestData[0]}
                    />}
                </div>
            </div>
        </div>
    )
}

async function requestUserStats(email) {
    const data = new FormData()
    data.append("UserEmail", email)
    const urlStat = `${APIBase}/statistics/`
    const urlUser = `${APIBase}/usertc/`
    try {
        const statResponse = await fetch(urlStat, {
            method: "POST",
            body: data,
        })

        if (statResponse.ok) {
            const statResult = await statResponse.json()
            const userResponse = await fetch(urlUser, {
                method: "POST",
                body: data,
            })

            if (userResponse.ok) {
                const userResult = await userResponse.json()
                return [statResult, userResult]
            }
            else {
                console.log("Stat data request failed")
                return null
            }
        }
        else {
            console.log("Stat data request failed")
            return null
        }
    }
    catch (error) {
        console.error('Error:', error);
        return null
    }
}


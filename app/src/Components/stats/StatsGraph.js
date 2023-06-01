import React, { useState } from "react";
import { CartesianGrid, XAxis, YAxis, BarChart, Bar } from "recharts";
import StatsGraphSelector from "./StatsGraphSelector";
import { dateTimeToString } from "../../Scripts/converters";

export default function StatsGraph(props) {

    console.log(props.data)

    const [chartSelection, setChartSelection] = useState("Weight")

    var data = props.data
    if (data.length > 7) {
        let diff = data.length - 7
        data = data.slice(diff)
    }
    
    var chartMaxValueY = 0
    const chartData = data.map(item => {
        chartMaxValueY = Math.max(chartMaxValueY, item[chartSelection])
        return {
            date: dateTimeToString(item["Time"]),
            value: item[chartSelection]
        }
    })

    const chartLabelY = {position: "insideTopLeft", dy: -30, dx: 15}
    chartLabelY.value = chartSelection === "Weight" ? "кг" : "см"

    const barChart = (
        <BarChart width={450} height={450} data={chartData} barCategoryGap={15} margin={{ top: 30, right: 10, bottom: 10, left: 10 }}>
            <CartesianGrid stroke="#ccc"/>
            <Bar dataKey="value" fill="#754e9c" />
            <XAxis dataKey="date" interval={"preserveStartEnd"}/>
            <YAxis width={30} type="number" domain={[0, chartMaxValueY + 10]} label={chartLabelY}/>
        </BarChart>
    )

    return (
        <div className="stats-content-graph-container">
            <div className="stats-content-graph-chart-wrapper">
                {barChart}
            </div>
            <div className="stats-content-graph-selector-container">
                <StatsGraphSelector
                    chartSelection={chartSelection}
                    setChartSelection={setChartSelection}
                />
            </div>
        </div>
    )
}
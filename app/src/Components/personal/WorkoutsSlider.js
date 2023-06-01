import React from "react";
import { useState } from "react";
import WorkoutCard from "../catalog/WorkoutCard";
import { ReactComponent as SliderArrowLeft } from "../../img/arrow-left-circle.svg"
import { ReactComponent as SliderArrowRight } from "../../img/arrow-right-circle.svg"

export default function WorkoutSlider(props) {
    const [sliderOffset, setSliderOffset] = useState(0)
    const sliderLength = props.recommendedWorkoutData.length

    const slideLeft = () => {
        setSliderOffset(currentSliderOffset => currentSliderOffset - 1)
    }

    const slideRight = () => {
        setSliderOffset(currentSliderOffset => currentSliderOffset + 1)
    }

    const workouts = props.recommendedWorkoutData.map(workout => {
        return (
            <WorkoutCard
                key={workout.id}
                id={workout.id}
                name={workout.NameOfTraining}
                previewSrc={workout.Img}
                duration={workout.TimeMovies}
                difficulty={workout.Difficulty}
                video={workout.LinkVideo}
                inventory={workout.Inventory}
                area={workout.StudyArea}
            />
        )
    })

    const showLeftArrow = (sliderOffset > 0)
    const showRightArrow = (sliderOffset < (sliderLength - 3))
    const sliderOffsetStyle = {
        transform: `translateX(-${sliderOffset * 328}px)`
    }

    return (
        <div className="personal-workouts-slider-wrapper">
            {showLeftArrow && <SliderArrowLeft
                className="personal-workouts-slider-button personal-workouts-slider-button-left"
                onClick={slideLeft} />}
            <div className="personal-workouts-slider" style={sliderOffsetStyle}>
                {workouts}
            </div>
            {showRightArrow && <SliderArrowRight
                className="personal-workouts-slider-button personal-workouts-slider-button-right"
                onClick={slideRight} />}
        </div>
    )
}
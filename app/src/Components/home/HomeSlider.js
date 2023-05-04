import React from "react";
import { useState } from "react";
import { ReactComponent as SliderArrowLeft } from "../../img/arrow-left-circle.svg"
import { ReactComponent as SliderArrowRight } from "../../img/arrow-right-circle.svg"

export default function HomeSlider(props) {
    const [sliderOffset, setSliderOffset] = useState(0)
    const sliderLength = props.images.length

    const slideLeft = () => {
        setSliderOffset(currentSliderOffset => currentSliderOffset - 1)
    }

    const slideRight = () => {
        setSliderOffset(currentSliderOffset => currentSliderOffset + 1)
    }

    const images = props.images.map((image, index) => {
        return (
            <img
                className="home-slider-image"
                src={image}
                key={index}
                alt="no"></img>
        )
    })

    const showLeftArrow = (sliderOffset > 0)
    const showRightArrow = (sliderOffset < (sliderLength - 1))

    const sliderOffsetStyle = {
        transform: `translateX(-${sliderOffset * 1000}px)`
    }

    return (
        <div className="home-slider-wrapper">
            {showLeftArrow && <SliderArrowLeft
                className="home-slider-button home-slider-button-left"
                onClick={slideLeft} />}
            <div className="home-slider" style={sliderOffsetStyle}>
                {images}
            </div>
            {showRightArrow && <SliderArrowRight
                className="home-slider-button home-slider-button-right"
                onClick={slideRight} />}
        </div>
    )
}
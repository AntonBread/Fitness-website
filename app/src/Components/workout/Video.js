import React from "react"

export default function Video(props) {
    return (
        <div className="workout-video-container">
            <iframe width="1152" height="500" src={props.video} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

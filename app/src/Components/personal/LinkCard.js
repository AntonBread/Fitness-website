import React from "react";

export default function LinkCard(props) {
    return (
        <div>
            <a href={props.href}>
                <img className="personal-link-card-image" src={props.previewSrc} alt="no"></img>
                <div className="personal-link-card-text">
                    <h2 className="personal-link-card-title">{props.title}</h2>
                    <div className="personal-link-card-about">{props.description}</div>
                </div>
            </a>
        </div>
    )
}
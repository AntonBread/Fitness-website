import React from "react";
import LinkCard from "./LinkCard";

export default function RecommendedLinks(props) {
    const links = props.links.map(link => {
        return (
            <LinkCard
                key={link.id}
                href={link.Href}
                previewSrc={link.Img}
                title={link.Name}
                description={link.Description}
            />
        )
    })
    return (
        <div className="personal-links-container">
            <div className="line"></div>
            <h1 className="personal-links-title">Полезные ссылки</h1>
            <div className="personal-links-list-container">
                {links}
            </div>
        </div>
    )
}

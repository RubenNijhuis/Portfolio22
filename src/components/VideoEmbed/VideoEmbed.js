import React from "react";
import propTypes from "prop-types";

// Styling
import "./style.scss";

const VideoEmbed = ({ content }) => {
    const className = "video-embed";
    const { url, width, height } = content.data.target;
    const aspectRatio = (height / width) * 100;

    return (
        <div className={className}>
            <div className="top-bar">
                <div className="buttons">
                    <div className="button" />
                    <div className="button" />
                    <div className="button" />
                </div>
            </div>
            <div
                className="container"
                style={{ paddingTop: `${aspectRatio}%` }}
            >
                <iframe
                    className="video"
                    src={url}
                    title="Embedded video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default VideoEmbed;

VideoEmbed.propTypes = {
    content: propTypes.object.isRequired
};

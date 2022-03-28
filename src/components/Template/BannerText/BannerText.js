import React from "react";
import propTypes from "prop-types";

// Styling
import "./style.scss";

const BannerText = ({ content }) => {
    const className = "banner-text";
    const text = content.data.target.content;

    return (
        <div className={className}>
            <h2 className="title">{text}</h2>
        </div>
    );
};

export default BannerText;

BannerText.propTypes = {
    content: propTypes.object.isRequired
};

import React from "react";
import propTypes from "prop-types";

// Arrow icons
import arrow_light from "assets/icons/arrow-icon-white.svg";
import arrow_dark from "assets/icons/arrow-icon-black.svg";

const Arrow = ({ theme = "light" }) => {
    const className = "arrow";
    const alt = theme === "light" ? "arrow icon light" : "arrow icon dark";
    const source = theme === "light" ? arrow_light : arrow_dark;

    return <img alt={alt} src={source} className={className} />;
};

export default Arrow;

Arrow.propTypes = {
    theme: propTypes.string.isRequired
};

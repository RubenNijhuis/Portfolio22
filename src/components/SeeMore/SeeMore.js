import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

// Styling
import "./style.scss";

const SeeMore = ({ url, text }) => {
    const className = "see-more";

    return (
        <Link className={className} to={url}>
            {text}
        </Link>
    );
};

export default SeeMore;

SeeMore.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

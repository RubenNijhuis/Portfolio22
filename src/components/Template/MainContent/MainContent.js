import React from "react";
import propTypes from "prop-types";

// Data aggregation && formattings
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { content_formatter } from "utils/content-formatters";

// Styling
import "./style.scss";
import "./typography.scss";

const MainContent = ({ content, options }) => {
    const className = "main-content";
    return (
        <section className={className}>
            {renderRichText(content, content_formatter("main", options))}
        </section>
    );
};

export default MainContent;

MainContent.propTypes = {
    content: propTypes.object.isRequired,
    options: propTypes.object.isRequired
};

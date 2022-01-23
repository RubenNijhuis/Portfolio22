import React from "react";
import propTypes from "prop-types";

// Data aggregation && formattings
import { renderRichText } from "gatsby-source-contentful/rich-text";

// Styling
import "./style.scss";
import "./typography.scss";

const IntroContent = ({ content }) => {
  const className = "intro-content";
  return <section className={className}>{renderRichText(content)}</section>;
};

export default IntroContent;

IntroContent.propTypes = {
  content: propTypes.object.isRequired
};

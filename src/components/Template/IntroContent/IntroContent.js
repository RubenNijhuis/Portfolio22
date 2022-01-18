import React from "react";

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

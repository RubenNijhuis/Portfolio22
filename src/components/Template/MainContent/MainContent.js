import React from "react";

// Data aggregation && formattings
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { project_content_formatter } from "utils/content-formatters";

// Styling
import "./style.scss";
import "./typography.scss";

const MainContent = ({ content, options }) => {
  const className = "main-content";
  return (
    <section className={className}>
      {renderRichText(content, project_content_formatter("main", options))}
    </section>
  );
};

export default MainContent;

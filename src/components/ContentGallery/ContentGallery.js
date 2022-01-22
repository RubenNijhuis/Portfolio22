import React from "react";

// Data aggregation && formattings
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { project_content_formatter } from "utils/content-formatters";

// Styling
import "./style.scss";

const ContentGallery = ({ type, time_span, content }) => {
  const className = "content-gallery";

  const options = {
    videoCover: true,
      backgroundColor: "#1e1e1e",
      modal: true
  };

  // Taking description seperate for easier styling
  const description = { raw: content.raw };

  return (
    <section className={className}>
      <div className="description">
        <div className="col--left">
          <span>{time_span}</span>
        <h2>{type}</h2>
        </div>
        <div className="col--right">
          {renderRichText(
            description,
            project_content_formatter("main", options)
          )}
        </div>
      </div>
      <div className="content">
        {renderRichText(content, project_content_formatter("main", options))}
      </div>
    </section>
  );
};

export default ContentGallery;

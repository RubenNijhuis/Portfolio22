import React from "react";
import PropTypes from "prop-types";

// Data aggregation && formattings
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { project_content_formatter } from "utils/content-formatters";

// Styling
import "./style.scss";

const ContentGallery = ({ type, time_span, description, content }) => {
  const className = "content-gallery";

  const options = {
    videoCover: true,
    backgroundColor: "#1e1e1e",
    modal: true
  };

  return (
    <section className={className}>
      <div className="description">
        <div className="col--left">
          <span>{time_span}</span>
          <h2>{type}</h2>
        </div>
        <div className="col--right">{description}</div>
      </div>
      <div className="content">
        {renderRichText(content, project_content_formatter("main", options))}
      </div>
    </section>
  );
};

export default ContentGallery;

ContentGallery.propTypes = {
  type: PropTypes.string.isRequired,
  time_span: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired
};

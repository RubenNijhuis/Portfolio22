import React from "react";
import propTypes from "prop-types";

// Styling
import "./style.scss";

const Tags = ({ tags, theme = "dark" }) => {
  const className = "tags";

  return (
    <div className={className}>
      {tags.map((tag, index) => (
        <span className={`tag tag--${theme}`} key={index}>
          <p>{tag}</p>
        </span>
      ))}
    </div>
  );
};

export default Tags;

Tags.propTypes = {
  tags: propTypes.array.isRequired,
  theme: propTypes.string
};

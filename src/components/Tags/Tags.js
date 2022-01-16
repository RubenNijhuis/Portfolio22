import React from "react";

// Styling
import "./styling.scss";

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

import React from "react";

const Tags = ({ tags, className, theme = "dark" }) => (
  <div className={`tags ${className}`}>
    {tags.map((tag, index) => (
      <span className={`tags__tag tags__tag--${theme}`} key={index}>
        <p>{tag}</p>
      </span>
    ))}
  </div>
);

export default Tags;

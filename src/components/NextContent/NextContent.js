import React from "react";

// Components
import { Link } from "gatsby";

// Styling
import "./style.scss";

const NextContent = ({ previous, next }) => {
  let className = "next-content";

  // Check if the links exist
  const full = !(previous === undefined && next === undefined);
  if (full) className += " full";

  return (
    <div className={className}>
      {previous === undefined ? null : (
        <Link to={previous}>
          <span>Previous</span>
        </Link>
      )}
      {next === undefined ? null : (
        <Link to={next}>
          <span>Next</span>
        </Link>
      )}
    </div>
  );
};

export default NextContent;

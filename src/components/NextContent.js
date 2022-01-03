import { Link } from "gatsby";
import React from "react";

const NextContent = ({ previous, next }) => {
  // Check if the links exist
  const full = !(previous === undefined && next === undefined);

  return (
    <div className={`next-content ${full === true ? "full" : ""}`}>
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

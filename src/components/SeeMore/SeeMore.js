import { Link } from "gatsby";
import React from "react";

// Styling
import "./style.scss";

const SeeMore = ({ url, text }) => {
  const className = "see-more";

  return (
    <Link className={className} to={url}>
      {text}
    </Link>
  );
};

export default SeeMore;

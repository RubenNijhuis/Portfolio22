import React, { useState } from "react";
import { Link } from "gatsby";
import propTypes from "prop-types";

// Utils
import { flattenNameToURL } from "utils/helper-functions";

// Components
import Tags from "components/Tags";

const Title = ({ title, tags, setActiveIndex, index }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <article>
      <Link to={`/journal/${flattenNameToURL(title)}`}>
        <div
          role="presentation"
          className="project-item"
          onMouseEnter={() => {
            setActiveIndex(index);
            setMouseHover(true);
          }}
          onMouseLeave={() => {
            setActiveIndex(-1);
            setMouseHover(false);
          }}
          index={index}
          style={{
            zIndex: mouseHover ? "1000" : "1"
          }}
        >
          <h3 className="project-title">{title}</h3>
          <Tags className="project-tag-list" theme="light" tags={tags} />
        </div>
      </Link>
    </article>
  );
};

export default Title;

Title.propTypes = {
  title: propTypes.string.isRequired,
  tags: propTypes.array.isRequired,
  setActiveIndex: propTypes.func.isRequired,
  index: propTypes.number.isRequired
};

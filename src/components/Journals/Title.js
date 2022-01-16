import { Link } from "gatsby";
import React, { useState } from "react";
import { flattenNameToURL } from "utils/helper-functions";
import Tags from "components/Tags";

const Title = ({ title, tags, setActiveIndex, index }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <article>
      <Link to={`/journals/${flattenNameToURL(title)}`}>
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
            zIndex: mouseHover ? `1000` : `1`,
          }}
        >
          <h3 className="project-title">
            <span>{title}</span>
          </h3>
          <Tags className="project-tag-list" theme="light" tags={tags} />
        </div>
      </Link>
    </article>
  );
};

export default Title;

import { Link } from "gatsby";
import React, { useState } from "react";
import { flattenNameToURL } from "../../utils/helper-functions";

const Title = ({ title, tags, setActiveIndex, index }) => {
    const [mouseHover, setMouseHover] = useState(false);

    return (
        <article>
            <Link to={`journals/${flattenNameToURL(title)}`}>
                <div
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
                    <div className="project-tag-list">
                        {tags.map((tag, index) => (
                            <div key={index} className="project-tag">
                                <span>{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default Title;

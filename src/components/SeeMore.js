import { Link } from "gatsby";
import React from "react";

const SeeMore = ({ url, text }) => (
    <Link className="see-more" to={url}>
        {text}
    </Link>
);

export default SeeMore;

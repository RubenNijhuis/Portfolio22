import React from "react";
import propTypes from "prop-types";

// Utils
// import { useCurrentWidth } from "utils/helper-functions";

// Components
import JournalLarge from "./JournalLarge";
import JournalSmall from "./JournalSmall";

// Styling
import "./style.scss";

const Journal = ({ entries, limit, animate }) => {
    // const className = "journal";
    // const width = useCurrentWidth();
    // const change_point = 1024;

    return (
        <>
            <JournalLarge entries={entries} />
            <JournalSmall entries={entries} limit={limit} animate={animate} />
        </>
    );
};

export default Journal;

Journal.propTypes = {
    entries: propTypes.array.isRequired,
    limit: propTypes.bool,
    animate: propTypes.bool
};

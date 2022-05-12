import React from "react";
import propTypes from "prop-types";

// Components
import JournalLarge from "./JournalLarge";
import JournalSmall from "./JournalSmall";

const Journal = ({ entries, limit, animate }) => {
    return (
        <>
            <JournalLarge entries={entries} animate={animate} />
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

import React from "react";
import { useCurrentWidth } from "../../utils/helper-functions";

import JournalsBig from "./JournalsBig";
import JournalsSmall from "./JournalsSmall";

const Journal = ({ entries, limit, animate }) => {
    let width = useCurrentWidth();
    let change_point = 1024;
    return <>{width > change_point ? <JournalsBig entries={entries} /> : <JournalsSmall entries={entries} limit={limit} animate={animate}/>}</>;
};

export default Journal;

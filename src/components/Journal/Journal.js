import React from "react";

// Utils
// import { useCurrentWidth } from "utils/helper-functions";

// Components
import JournalBig from "./JournalLarge";
import JournalSmall from "./JournalSmall";

// Styling
import "./style.scss";

const Journal = ({ entries, limit, animate }) => {
  // const className = "journal";
  // const width = useCurrentWidth();
  // const change_point = 1024;

  return (
    <>
      <JournalBig entries={entries} />
      <JournalSmall entries={entries} limit={limit} animate={animate} />
    </>
  );
};

export default Journal;

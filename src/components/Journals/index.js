import React from "react";

// Utils
import { useCurrentWidth } from "utils/helper-functions";

// Components
import JournalsLarge from "./JournalsLarge";
import JournalsSmall from "./JournalsSmall";

// Styling
import "./style.scss";

const Journal = ({ entries, limit, animate }) => {
  // const className = "journal";

  const width = useCurrentWidth();
  const change_point = 1024;
  return (
    <>
      {width > change_point ? (
        <JournalsLarge entries={entries} />
      ) : (
        <JournalsSmall entries={entries} limit={limit} animate={animate} />
      )}
    </>
  );
};

export default Journal;

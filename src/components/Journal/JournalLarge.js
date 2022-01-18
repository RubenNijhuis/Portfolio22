import React, { useEffect, useState } from "react";

// Utils
import { isBrowser } from "utils/helper-functions";
import {
  sanitize_entry,
  sanitize_journal_entries,
} from "utils/datatype-transformers";

// Components
import Title from "./Title";
import Media from "./Media";

// Styling
import "./journal-large.scss";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    if (isBrowser) {
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, []);
  return mousePosition;
};

const JournalContainer = ({
  iindex,
  year,
  year_entries,
  setActiveIndex,
  activeIndex,
  x,
  y,
}) => {
  return (
    <div className="year-journal">
      <h2 className="year">'{year}</h2>
      <div className="project-list">
        {year_entries.map((entry, index) => {
          const { name, tags } = sanitize_entry(entry);
          return (
            <Title
              title={name}
              tags={tags}
              setActiveIndex={setActiveIndex}
              index={index + iindex}
              key={index}
            />
          );
        })}
      </div>
      <div className="project-media">
        {year_entries.map((entry, index) => {
          const { img } = sanitize_entry(entry);

          let isActive = index + iindex === activeIndex;
          let xPos = x;
          let yPos = y;
          return (
            <Media
              img={img}
              active={isActive}
              x={xPos}
              y={yPos}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

const JournalLarge = ({ entries }) => {
  const [entries_formatted] = sanitize_journal_entries(entries);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { x, y } = useMousePosition();

  let year = new Date().getFullYear().toString().slice(2, 4);

  return (
    <section className="journal">
      <header className="headline">Journal</header>
      {entries_formatted.map((year_entries, indexMain) => {
        let iindex = indexMain * 10 + 1;
        if (indexMain !== 0) iindex++;
        return (
          <JournalContainer
            iindex={iindex}
            year={year--}
            year_entries={year_entries}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            x={x}
            y={y}
            key={indexMain}
          />
        );
      })}
    </section>
  );
};

export default JournalLarge;

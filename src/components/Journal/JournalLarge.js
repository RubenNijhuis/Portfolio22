import React, { useEffect, useState } from "react";

// Utils
import { isBrowser } from "utils/helper-functions";
import {
    sanitize_entry,
    sanitize_journal_entries
} from "utils/datatype-transformers";

// Components
import Title from "./Title";
import Media from "./Media";

import AnimatedLetters from "components/AnimatedLetters";

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

const JournalYear = ({
    iindex,
    year,
    year_entries,
    setActiveIndex,
    activeIndex,
    x,
    y
}) => {
    const className = "book";
    return (
        <div className={className}>
            <h2 className="year">'{year}</h2>
            <div className="entries">
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
            <div className="images">
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

const JournalLarge = ({ entries, animate }) => {
    const className = "journal";

    const [entries_formatted] = sanitize_journal_entries(entries);
    const [activeIndex, setActiveIndex] = useState(-1);
    const { x, y } = useMousePosition();

    let year = entries[0].year - 2000;

    return (
        <section className={className}>
            <AnimatedLetters
                className="headline"
                shouldRotate={true}
                left_to_right={true}
                title={"Journal"}
                disabled={animate}
            />
            {entries_formatted.map((year_entries, indexMain) => {
                let iindex = indexMain * 10 + 1;
                if (indexMain !== 0) iindex++;
                return (
                    <JournalYear
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

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import data from "../../testing_data/journals.json";
import { flattenNameToURL } from "../../utils/helper-functions";
import SeeMore from "../SeeMore";

const JournalSmall = ({ name, tags, url, alt, bgColor }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.85,
                ease: "easeOut",
            },
        },
        hidden: {
            opacity: 0,
            scale: 0.95,
            y: "10%",
            transition: { duration: 0 },
        },
    };

    useEffect(() => {
        inView ? controls.start("visible") : controls.start("hidden");
    }, [controls, inView]);

    return (
        <motion.a
            animate={controls}
            ref={ref}
            variants={variants}
            className="journal-small"
            href={`/journals/${flattenNameToURL(name)}`}
        >
            <article>
                <div className="journal__text">
                    <h2 className="journal-small__name">{name}</h2>
                    <div className="journal-small__tags">
                        {tags.map((tag, index) => (
                            <span count={index}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="journal-small__image-wrapper">
                    <img src={url} alt={alt} />
                </div>
            </article>
        </motion.a>
    );
};

const JournalYearContainer = ({ limit, year, entries }) => {
    const limit_length = limit ? 3 : entries.length;
    return (
        <div className="journals-small__container">
            <h2 className="journals-small__year">'{year}</h2>
            <div className="journals-small__grid">
                {entries
                    .slice(0, limit_length)
                    .map(({ name, url, alt, tags, bgColor }, index) => (
                        <JournalSmall
                            name={name}
                            url={url}
                            alt={alt}
                            tags={tags}
                            bgColor={bgColor}
                            count={index}
                        />
                    ))}
            </div>
        </div>
    )
}

const JournalsSmall = ({limit}) => {
    let year = 22;
    const amount_entries = data.flat().length;

    return (
        <section className="journals-small">
            <header className="headline">Journals</header>
            {data.map((journalEntries, index) => (
                <JournalYearContainer
                    limit={limit}
                    count={index}
                    year={year--}
                    entries={journalEntries}
                />
            ))}
            <SeeMore
                url={`/journals`}
                text={`See all ${amount_entries} journal entries`}
            />
        </section>
    );
};

export default JournalsSmall;

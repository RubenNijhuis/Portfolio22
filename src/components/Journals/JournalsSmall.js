import React, { useEffect } from "react";

// Animation
import { journal_small_fade_in } from "utils/animation-variants";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Data aggregation
import {
  sanitize_entry,
  sanitize_journal_entries,
} from "utils/datatype-transformers";
import { flattenNameToURL } from "utils/helper-functions";

// Components
import SeeMore from "components/SeeMore";
import Tags from "components/Tags";
import AssetHandler from "../AssetHandler";

// Styling
import "./journals-small.scss";

/**
 * Small entry container
 */
const JournalSmall = ({ name, tags, img }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.a
      animate={controls}
      ref={ref}
      variants={journal_small_fade_in}
      className="journal-small"
      href={`/journals/${flattenNameToURL(name)}`}
    >
      <article>
        <div className="journal__text">
          <h2 className="journal-small__name">{name}</h2>
          <Tags tags={tags} theme={"light"} />
        </div>
        <div className="journal-small__image-wrapper">
          <AssetHandler asset={img} />
        </div>
      </article>
    </motion.a>
  );
};

/**
 * Format all entries per year
 */
const JournalYearContainer = ({ limit, year, entries }) => {
  const limit_length = limit ? 4 : entries.length;
  return (
    <div className="journals-small__container">
      <h2 className="journals-small__year">'{year}</h2>
      <div className="journals-small__grid">
        {entries.slice(0, limit_length).map((entry, index) => {
          const { name, tags, img } = sanitize_entry(entry);
          return (
            <JournalSmall
              name={name}
              tags={tags}
              img={img}
              key={index}
              count={index}
            />
          );
        })}
      </div>
    </div>
  );
};

/**
 * Display all journals per year in small form
 */
const JournalsSmall = ({ entries, limit = false, animate }) => {
  let [entries_formatted, amount_entries] = sanitize_journal_entries(entries);

  return (
    <section className="journals-small">
      <header className="headline">Journals</header>
      {entries_formatted.map((year_entries, index) => {
        let year = new Date().getFullYear();
        // Grab the last two digits
        let year_formatted = (year - index).toString().slice(2, 4);

        return (
          <JournalYearContainer
            animate={animate}
            limit={limit}
            count={index}
            year={year_formatted}
            key={index}
            entries={year_entries}
          />
        );
      })}
      {limit ? (
        <SeeMore
          url={`/journals`}
          text={`See all ${amount_entries} journal entries`}
        />
      ) : null}
    </section>
  );
};

export default JournalsSmall;

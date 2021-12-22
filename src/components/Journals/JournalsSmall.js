import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  sanitize_entry,
  sanitize_journal_entries,
} from "../../utils/datatype-transformers";
import { flattenNameToURL } from "../../utils/helper-functions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SeeMore from "../SeeMore";
import { journal_small_fade_in } from "../../utils/animation-variants";

/**
 * Small entry container
 */
const JournalSmall = ({ name, tags, img, alt }) => {
    const image = getImage(img);
    console.log(img);
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
          <div className="journal-small__tags">
            {tags.map((tag, index) => (
              <span key={index} count={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="journal-small__image-wrapper">
          <GatsbyImage image={image} alt={alt} />
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
          const [name, tags, img, img_alt] = sanitize_entry(entry);
          return (
            <JournalSmall
              name={name}
              tags={tags}
              img={img}
              alt={img_alt}
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

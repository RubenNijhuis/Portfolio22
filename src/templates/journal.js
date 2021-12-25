import React from "react";

// Data aggregation && formattings
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { project_content_formatter } from "utils/content-formatters";

// Animation
import { motion } from "framer-motion";
import { project_hero_transition } from "utils/animation-variants";

// Components
import AnimatedLetters from "components/Template/AnimatedLetters";
import Layout from "components/Layout";
import Tags from "components/Tags";

const JournalTemplate = ({ data }) => {
  const { name, img, introduction, year, content, tags } =
    data.contentfulJournal;

  const year_formatted = "2021";
  const bg_image_parsed = getImage(img);
  const tags_formatted = tags.split(" ");

  return (
    <Layout title={`${name} | Ruben Nijhuis | Designer && Developer`}>
      <div className="template template--journal">
        <section className="intro">
          <div className="intro__details">
            <div className="intro__details__header">
              <AnimatedLetters title={name} />
            </div>
            <div className="intro__personalia">
              <div className="intro__personalia__details">
                <div>
                  <h2 className="bold">Year</h2>
                  <h2>'{year_formatted}</h2>
                </div>
              </div>
              <Tags tags={tags_formatted} theme={"light"} />
            </div>
          </div>
          <div className="intro__hero-img">
            <motion.div
              className="intro__hero-img--wrapper"
              initial="initial_img"
              animate="animate_img"
              variants={project_hero_transition}
            >
              <GatsbyImage
                image={bg_image_parsed}
                alt={bg_image_parsed.title}
              />
            </motion.div>
            <motion.div
              initial="reveal_initial"
              animate="reveal_animate"
              className="intro__hero-img__reveal"
              variants={project_hero_transition}
            />
          </div>
        </section>
        <div className="intro__content">
          {renderRichText(introduction, project_content_formatter.intro)}
        </div>
        <section>
          <div className="template__content" style={{ color: "white" }}>
            {renderRichText(content, project_content_formatter.content)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default JournalTemplate;

export const query = graphql`
  query ($slug: String!) {
    contentfulJournal(name: { eq: $slug }) {
      name
      tags
      year
      img {
        title
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      introduction {
        raw
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

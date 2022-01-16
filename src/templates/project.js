import React from "react";

// Data aggregation && formattings
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { project_content_formatter } from "utils/content-formatters";
import { flattenNameToURL } from "utils/helper-functions";

// Animation
import { motion } from "framer-motion";
import {
  project_hero_transition,
  project_details_transition,
} from "utils/animation-variants";

// Components
import AnimatedLetters from "components/Template/AnimatedLetters";
import Layout from "components/Layout";
import Tags from "components/Tags";
import NextContent from "components/NextContent";
import AssetHandler from "../components/AssetHandler";

const ProjectTemplate = ({ data }) => {
  // Splitting data for readability
  const { previous, project, next } = data;
  const {
    name,
    description,
    introduction,
    year,
    role,
    content,
    tags,
    main_img,
  } = project;

  // Format data
  const year_formatted = `'${year.toString().slice(2, 4)}`;
  const tags_formatted = tags.split(" | ");

  return (
    <Layout title={`${name} | Ruben Nijhuis | Designer && Developer`}>
      <div className="template template--project">
        <section className="intro">
          <div className="intro__details">
            <div className="intro__details__header">
              <AnimatedLetters title={name} />
              <motion.p
                initial="hidden"
                animate="show"
                variants={project_details_transition}
              >
                {description}
              </motion.p>
            </div>
            <motion.div
              className="intro__personalia"
              initial="hidden"
              animate="show"
              variants={project_details_transition}
            >
              <div className="intro__personalia__details">
                <div>
                  <h2 className="bold">Year</h2>
                  <h2>{year_formatted}</h2>
                </div>
                <div>
                  <h2 className="bold">Role</h2>
                  <h2>{role}</h2>
                </div>
              </div>
              <Tags tags={tags_formatted} theme={"light"} />
            </motion.div>
          </div>
          <div className="intro__hero-img">
            <motion.div
              className="intro__hero-img--wrapper"
              initial="initial_img"
              animate="animate_img"
              variants={project_hero_transition}
            >
              <AssetHandler asset={main_img} />
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
          <div className="template__content">
            {renderRichText(content, project_content_formatter.content)}
          </div>
        </section>
        <NextContent
          previous={
            previous === null
              ? undefined
              : `/projects/${flattenNameToURL(previous.name)}`
          }
          next={
            next === null
              ? undefined
              : `/projects/${flattenNameToURL(next.name)}`
          }
        />
      </div>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query ($slug: String!, $previous: String, $next: String) {
    previous: contentfulProject(name: { eq: $next }) {
      name
    }
    next: contentfulProject(name: { eq: $previous }) {
      name
    }
    project: contentfulProject(name: { eq: $slug }) {
      name
      description
      introduction {
        raw
      }
      main_img {
        title
        file {
          url
          contentType
        }
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      tags
      year
      role
      content {
        raw
        references {
          ... on ContentfulAsset {
            title
            contentful_id
            file {
                contentType
                url
              }
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

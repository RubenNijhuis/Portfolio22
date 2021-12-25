import React from "react";

import Layout from "../components/Layout";
import TemplateImage from "../components/Template/Template_Image";
import Tags from "../components/Tags";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

const formatting_main = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => <TemplateImage img={node} />,
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="template__content__paragraph">{children}</p>
    ),
  },
};

const formatting_intro = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p>{children}</p>
    ),
  },
};

const ProjectTemplate = ({ data }) => {
  const {
    name,
    description,
    introduction,
    backgroundImg,
    year,
    role,
    content,
    tags,
  } = data.contentfulProject;

  const variants = {
    show: {
      height: "0%",
      transition: {
        delay: 0.25,
        duration: 0.75,
        ease: [0.66, 0.25, 0.48, 1],
      },
    },
    hidden: {
      height: "100%",
    },
    still: {
      y: "15%",
      scale: 0.95,
    },
    move_up: {
      opacity: 1,
      y: "0%",
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const year_parsed = year.slice(2, 4);
  const bg_image_parsed = getImage(backgroundImg);
  const tags_formatted = tags.split(" ");
  return (
    <Layout title={`Ruben Nijhuis | ${name}`}>
      <div className="template template--project">
        <section className="intro">
          <div className="intro__details">
            <div className="intro__details__header">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
            <div className="intro__personalia">
              <div className="intro__personalia__details">
                <div>
                  <h2 className="bold">Year</h2>
                  <h2>'{year_parsed}</h2>
                </div>
                <div>
                  <h2 className="bold">Role</h2>
                  <h2>{role}</h2>
                </div>
              </div>
              <Tags tags={tags_formatted} theme={"light"} />
            </div>
          </div>
          <div className="intro__hero-img">
            <motion.div
              className="intro__hero-img--wrapper"
              initial="still"
              animate="move_up"
              variants={variants}
            >
              <GatsbyImage image={bg_image_parsed} alt={"A"} />
            </motion.div>
            <motion.div
              className="intro__hero-img__reveal"
              initial="hidden"
              animate="show"
              variants={variants}
            />
          </div>
        </section>
        <div className="intro__content">
          {renderRichText(introduction, formatting_intro)}
        </div>
        <section>
          <div className="template__content" style={{ color: "white" }}>
            {renderRichText(content, formatting_main)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query ($slug: String!) {
    contentfulProject(name: { eq: $slug }) {
      name
      description
      introduction {
        raw
      }
      tags
      year
      role
      backgroundImg {
        title
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 1000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(
              layout: FULL_WIDTH
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

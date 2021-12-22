import React from "react";
import Layout from "../components/Layout";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

const formatting = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      console.log(node);
      const image = getImage(node.data.target);
      return (
        <div className="template__img-wrapper">
          <GatsbyImage image={image} alt={"A"} />
        </div>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="template__content__paragraph">{children}</p>
    ),
  },
};

const ProjectTemplate = ({ data }) => {
  const { name, description, backgroundImg, year, role, content, tags } =
    data.contentfulProject;

  const year_parsed = year.slice(2, 4);
  const bg_image_parsed = getImage(backgroundImg);
  const tags_formatted = tags.split(" ");

  return (
    <Layout>
      <div className="template template--project">
        <section className="template__introduction">
          <div className="template__hero-img">
            <GatsbyImage image={bg_image_parsed} alt={"A"} />
          </div>
          <div className="template__details">
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="template__project-deets">
              <div>
                <h2 className="bold">Year</h2>
                <h2>'{year_parsed}</h2>
              </div>
              <div>
                <h2 className="bold">Role</h2>
                <h2>{role}</h2>
              </div>
            </div>
            <div className="template__project-deets__tags">
              {tags_formatted.map((tag, index) => (
                <span
                  className="template__project-deets__tags__tag"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="template__content" style={{ color: "white" }}>
            {renderRichText(content, formatting)}
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

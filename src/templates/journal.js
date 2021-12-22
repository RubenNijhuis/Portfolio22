import React from "react";
import Layout from "../components/Layout";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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

const JournalTemplate = ({ data }) => {
  const { name, img, year, content, tags } =
    data.contentfulJournal;

//   const year_parsed = year.slice(2, 4);
  const bg_image_parsed = getImage(img);
  const tags_formatted = tags.split(" ");

  return (
    <Layout>
      <div className="template template--journal">
        <section className="template__introduction">
          <div className="template__hero-img">
            <GatsbyImage image={bg_image_parsed} alt={"A"} />
          </div>
          <div className="template__details">
            <h1>{name}</h1>
            <div className="template__project-deets">
              <div>
                <h2 className="bold">Year</h2>
                <h2>'{year}</h2>
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
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

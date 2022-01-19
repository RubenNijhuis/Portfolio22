import React from "react";

// Data aggregation
import { graphql } from "gatsby";

// Util
import { flattenNameToURL } from "utils/helper-functions";

// Components
import Layout from "components/Layout";
import Details from "components/Template/Details/Details";
import MainImage from "components/Template/MainImage";
import IntroContent from "components/Template/IntroContent/IntroContent";
import MainContent from "components/Template/MainContent/MainContent";
import NextContent from "components/NextContent";

// Styling
import "styling/layouts/template.scss";

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
    background_color,
    hero_img,
  } = project;

  // Format data
  const year_formatted = `'${year.toString().slice(2, 4)}`;
  const tags_formatted = tags.split(" | ");

  return (
    <Layout title={`${name} | Ruben Nijhuis | Designer && Developer`}>
      <div className="template">
        <section className="hero hero--project">
          <Details
            name={name}
            description={description}
            year={year_formatted}
            tags={tags_formatted}
            role={role}
          />
          <MainImage img={hero_img} backgroundColor={background_color} />
        </section>
        <IntroContent content={introduction} />
        <MainContent content={content} />
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
      tags
      year
      role
      background_color
      hero_img {
        alt: title
        file {
          url
          contentType
        }
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      introduction {
        raw
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            alt: title
            file {
              contentType
              url
            }
            __typename
            internal {
              type
            }
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          ... on ContentfulImageGallery {
            name
            contentful_id
            images {
              contentful_id
              alt: title
              file {
                contentType
                url
              }
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              internal {
                type
              }
              __typename
            }
            __typename
          }
          ... on ContentfulBannerText {
            contentful_id
            __typename
            content
            internal {
              type
            }
          }
          ... on ContentfulEmeddedVideo {
            contentful_id
            __typename
            url
            width
            height
            internal {
              type
            }
          }
        }
      }
    }
  }
`;

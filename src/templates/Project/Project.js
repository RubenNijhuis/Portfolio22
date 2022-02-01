import React from "react";
import propTypes from "prop-types";

// Data aggregation
import { graphql } from "gatsby";

// Util
import { flattenNameToURL } from "utils/helper-functions";

// Components
import Layout from "components/Layout";
import Details from "components/Template/Details/Details";
import HeroImage from "components/Template/HeroImage";
import IntroContent from "components/Template/IntroContent/IntroContent";
import MainContent from "components/Template/MainContent/MainContent";
import NextContent from "components/NextContent";

// Styling
import "./style.scss";

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
    hero_img
  } = project;

  // Format data
  const year_formatted = `'${year.toString().slice(2, 4)}`;
  const tags_formatted = tags.split(" | ");

  const content_options = {
    videoCover: true,
    backgroundColor: background_color
  };

  return (
    <Layout title={`${name} | Ruben Nijhuis | Designer && Developer`}>
      <div className="project-template">
        <section className="hero hero--project">
          <Details
            name={name}
            description={description}
            year={year_formatted}
            tags={tags_formatted}
            role={role}
          />
          <HeroImage img={hero_img} options={content_options} />
        </section>
        <IntroContent content={introduction} />
        <MainContent content={content} options={content_options} />
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

ProjectTemplate.propTypes = {
  data: propTypes.object.isRequired
};

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
        __typename
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

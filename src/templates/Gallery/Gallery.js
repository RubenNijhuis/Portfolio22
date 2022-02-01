import React from "react";
import propTypes from "prop-types";

// Data aggregation && formattings
import { graphql } from "gatsby";
import { flattenNameToURL } from "utils/helper-functions";

// Components
import Layout from "components/Layout";
import ContentGallery from "components/ContentGallery/ContentGallery";
import NextContent from "components/NextContent";

// Styling
import "./style.scss";

const GalleryTemplate = ({ data }) => {
  const { type, time_span, description, content } = data.gallery;
  const { previous, next } = data;

  return (
    <Layout title={`${name} | Ruben Nijhuis | Designer && Developer`}>
      <ContentGallery
        type={type}
        content={content}
        time_span={time_span}
        description={description}
        limit={false}
      />
      <NextContent
        previous={
          previous === null
            ? undefined
            : `/gallery/${flattenNameToURL(previous.name)}`
        }
        next={
          next === null ? undefined : `/gallery/${flattenNameToURL(next.name)}`
        }
      />
    </Layout>
  );
};

export default GalleryTemplate;

GalleryTemplate.propTypes = {
  data: propTypes.object
};

export const query = graphql`
  query ($slug: String!, $previous: String, $next: String) {
    previous: contentfulGallery(type: { eq: $next }) {
      name: type
    }
    next: contentfulGallery(type: { eq: $previous }) {
      name: type
    }
    gallery: contentfulGallery(type: { eq: $slug }) {
      time_span
      type
      description
      content {
        raw
        references {
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
        }
      }
    }
  }
`;

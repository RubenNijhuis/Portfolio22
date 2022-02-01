import React from "react";
import propTypes from "prop-types";

// Components
import Layout from "components/Layout";

// Data
import { graphql } from "gatsby";
import ContentGallery from "components/ContentGallery/ContentGallery";

const GalleryPage = ({ data }) => {
  const { galleries } = data;

  return (
    <Layout>
      {galleries.nodes.map(
        ({ type, time_span, description, content }, index) => (
          <ContentGallery
            type={type}
            content={content}
            time_span={time_span}
            description={description}
            limit={true}
            key={index}
          />
        )
      )}
    </Layout>
  );
};

export default GalleryPage;

GalleryPage.propTypes = {
  data: propTypes.object.isRequired
};

export const query = graphql`
  query GallerypageQuery {
    galleries: allContentfulGallery(sort: { fields: time_span, order: DESC }) {
      nodes {
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
  }
`;

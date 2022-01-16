import React from "react";

import Layout from "components/Layout";
// import Hero from "containers/Hero";
import Intro from "containers/Intro";
import ProjectsGrid from "components/ProjectsGrid";
import SmallAbout from "containers/SmallAbout";
import Journals from "components/Journals";

import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { projects, journals, about } = data;

  // Split the data into variables for readability
  const projects_data = projects.nodes;
  const entries_data = journals.nodes;
  const about_data = about;

  return (
    <Layout>
      {/* <Hero /> */}
      <Intro />
      <ProjectsGrid projects={projects_data} animate={true} limit={true} />
      <SmallAbout about={about_data.compact_about} photo={about_data.photo} />
      {/* <Journals entries={entries_data} animate={true} limit={true} /> */}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    projects: allContentfulProject(sort: { order: DESC, fields: year }) {
      nodes {
        name
        description
        tags
        year
        backgroundImg {
          title
          file {
            contentType
            url
          }
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }

    about: contentfulAbout {
      compact_about {
        raw
      }
      photo {
        title
        file {
          contentType
          url
        }
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }

    cv: contentfulAsset(title: { eq: "cv" }) {
      file {
        url
      }
    }

    journals: allContentfulJournal(sort: { fields: year, order: DESC }) {
      nodes {
        name
        tags
        year
        img {
          title
          file {
            contentType
            url
          }
          gatsbyImageData(width: 500, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

import React from "react";
import propTypes from "prop-types";

// Components
import Hero from "containers/Hero";
import Layout from "components/Layout";
import Intro from "containers/Intro";
import ProjectsGrid from "components/ProjectsGrid";
import SmallAbout from "containers/SmallAbout";
import Journal from "components/Journal";

// Data
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { projects, journal, about, heroImg } = data;

  const projects_data = projects.nodes;
  const entries_data = journal.nodes;
  const about_data = about;

  return (
    <Layout>
      <Hero asset={heroImg} />
      <Intro />
      <ProjectsGrid projects={projects_data} animate={true} limit={true} />
      <SmallAbout about={about_data.compact_about} photo={about_data.photo} />
      <Journal entries={entries_data} animate={true} limit={true} />
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: propTypes.object.isRequired
};

export const query = graphql`
  query HomepageQuery {
    heroImg: contentfulAsset(title: {eq: "homescreen-img"}) {
      alt: title
      file {
        contentType
        url
      }
      gatsbyImageData(placeholder: DOMINANT_COLOR)
    }

    projects: allContentfulProject(sort: { order: DESC, fields: year }) {
      nodes {
        name
        description
        tags
        background_color
        showcase_img {
          alt: title
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
        alt: title
        file {
          contentType
          url
        }
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }

    journal: allContentfulJournal(sort: { fields: year, order: DESC }) {
      nodes {
        name
        tags
        year
        img {
          alt: title
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

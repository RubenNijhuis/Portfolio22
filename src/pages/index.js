import React, { useEffect } from "react";

import Layout from "components/Layout";
import Hero from "containers/Hero";
import Infographic from "containers/Infographic";
import ProjectsGrid from "components/Projects/ProjectsGrid";
import About from "containers/About";
import Journals from "components/Journals";

import { graphql } from "gatsby";
import { isBrowser } from "utils/helper-functions";

const IndexPage = ({ data }) => {
  const { projects, journals, cv, about } = data;
  /**
   * Split the data into variables for readability
   */
  const projects_data = projects.nodes;
  const entries_data = journals.nodes;
  const assets_data = cv.file.url;
  const about_data = about;

  /*
   * Scroll based checker - renders the journals or the infographic
   * on top as they both occupy the same z-height in the stack
   */

  const handleScroll = () => {
    if (isBrowser) {
      const amount_scrolled = window.scrollY;
      const setCSSVar = (name, val) =>
        document.documentElement.style.setProperty(name, val);
      const breakpoint = document.body.clientHeight / 2;
      amount_scrolled > breakpoint
        ? setCSSVar("--zJournals", "fixed")
        : setCSSVar("--zJournals", "none");
    }
  };
  // Run function because initial render doesn't (causing a scroll freeze)
  handleScroll();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <Hero />
      <Infographic />
      <ProjectsGrid projects={projects_data} animate={true} limit={true} />
      <About
        about={about_data.compact_about}
        photo={about_data.photo}
        interests={about_data.interests}
        cv={assets_data}
      />
      <Journals entries={entries_data} animate={true} limit={true} />
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
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }

    about: contentfulAbout {
      interests
      compact_about {
        raw
      }
      photo {
        title
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
          gatsbyImageData(width: 500, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

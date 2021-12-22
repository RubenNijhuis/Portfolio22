import React, { useEffect } from "react";

import Layout from "../components/Layout";
import Hero from "../containers/Hero";
import Infographic from "../containers/Infographic";
import Projects from "../components/Projects/ProjectsGrid";
import About from "../containers/About";
import Journals from "../components/Journals/Journal";

import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const projects_data = data.allContentfulProject.edges;
  const entries_data = data.allContentfulJournal.edges;

  useEffect(() => {
    /*
     * Scroll based checker - renders the journals or the infographic
     * on top as they both occupy the same z-height in the stack
     */
    const handleScroll = () => {
      const setCSSVar = (name, val) =>
        document.documentElement.style.setProperty(name, val);
      window.scrollY > document.body.clientHeight / 2
        ? setCSSVar("--zInfographic", "none")
        : setCSSVar("--zInfographic", "fixed");

      window.scrollY > document.body.clientHeight / 2
        ? setCSSVar("--zJournals", "fixed")
        : setCSSVar("--zJournals", "none");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <Hero />
      <Infographic />
      <Projects projects={projects_data} animate={true} limit={true} />
      <About />
      <Journals entries={entries_data} animate={true} limit={true} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    allContentfulProject(sort: { order: DESC, fields: year }) {
      edges {
        node {
          name
          description
          tags
          year
          backgroundImg {
            title
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
    allContentfulJournal(sort: { fields: year, order: DESC }) {
      edges {
        node {
          name
          tags
          year
          img {
            title
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

// contentfulAbout {
//   aboutMeSmall {
//     raw
//   }
// }

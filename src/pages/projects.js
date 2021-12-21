import React from "react";

import Projects from "../components/Projects/ProjectsGrid";
import Layout from "../components/Layout";

import { graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
  const projects_data = data.allContentfulProject.edges;
  return (
    <Layout>
      <Projects projects={projects_data} animate={false} see_more={false} />
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject(sort: { order: DESC, fields: year }) {
      edges {
        node {
          name
          description
          tags
          year
          backgroundImg {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;

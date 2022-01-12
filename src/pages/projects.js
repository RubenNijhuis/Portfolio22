import React from "react";

import ProjectsGrid from "components/Projects/ProjectsGrid";
import Layout from "components/Layout";

import { graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
  const projects_data = data.projects.nodes;
  return (
    <Layout>
      <ProjectsGrid projects={projects_data} animate={false} see_more={false} />
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ProjectsPageQuery {
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
  }
`;

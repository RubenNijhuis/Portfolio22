import React from "react";
import propTypes from "prop-types";

// Components
import ProjectsGrid from "components/ProjectsGrid";
import Layout from "components/Layout";

// Data aggregation
import { graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
  const projects_data = data.projects.nodes;

  return (
    <Layout>
      <ProjectsGrid projects={projects_data} animate={false} limit={false} />
    </Layout>
  );
};

export default ProjectsPage;

ProjectsPage.propTypes = {
  data: propTypes.object.isRequired
};

export const query = graphql`
  query ProjectsPageQuery {
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
  }
`;

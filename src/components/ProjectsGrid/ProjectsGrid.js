import React from "react";

// Utils
import { sanitize_project } from "utils/datatype-transformers";
import { swap_array_elements, useCurrentWidth } from "utils/helper-functions";
import { sizes } from "utils/constants";

// Components
import Project from "components/Project";
import SeeMore from "components/SeeMore";

// Styling
import "./style.scss";

const ProjectsGrid = ({ projects, animate = true, limit = false }) => {
  const amount_projects = projects.length;
  const width = useCurrentWidth();
  const className = "projects-grid";

  // Swap projects before render (fixes items rebounce)
  const projects_parsed =
    width > sizes.medium ? swap_array_elements(projects) : projects;

  return (
    <section className={className}>
      <h2 className="heading">Projects</h2>
      <div className="grid">
        {width !== undefined &&
          projects_parsed.map((project, index) => {
            const { name, tags, description, img } = sanitize_project(project);
            return (
              <Project
                animate={animate}
                key={index}
                name={name}
                description={description}
                img={img}
                tags={tags}
                count={index}
              />
            );
          })}
      </div>
      {limit ? (
        <SeeMore
          url={`/projects`}
          text={`See all ${amount_projects} projects`}
        />
      ) : null}
    </section>
  );
};

export default ProjectsGrid;
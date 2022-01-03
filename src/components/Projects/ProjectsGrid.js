import React from "react";
import { swap_array_elements, useCurrentWidth } from "utils/helper-functions";

import Project from "components/Projects/Project";
import SeeMore from "components/SeeMore";

const ProjectsGrid = ({ projects, animate = true, limit = false }) => {
  const amount_projects = projects.length;
  let width = useCurrentWidth();
  let parsed_projects = [];

  // Swap projects before render (fixes items rebounce)
  const breakpoint = 1024;
  parsed_projects =
    width > breakpoint ? swap_array_elements(projects) : projects;

  return (
    <section className="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects__grid">
        {width !== undefined &&
          parsed_projects.map(({ node }, index) => {
            const { name, description, backgroundImg } = node;
            const tags = node.tags.split(" ");
            return (
              <Project
                animate={animate}
                key={index}
                name={name}
                description={description}
                img={backgroundImg}
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

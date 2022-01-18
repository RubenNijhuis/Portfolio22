import React from "react";

// Utils
import { transform_project } from "utils/datatype-transformers";
import { swap_array_elements, useCurrentWidth } from "utils/helper-functions";
import { sizes } from "utils/constants";
import { limits } from "constants/limits";

// Components
import Project from "components/Project";
import SeeMore from "components/SeeMore";

/**
 * Griod for sizes bigger than laptop
 *
 * | 1fr  1fr  1fr  |
 * | ---- ---- ---- |
 * |  x          x  |
 * |  y    x     y  |
 * |       y        |
 * |  x          x  |
 * |  y          y  |
 * |       x        |
 * |       y        |
 * ------------------

 */

// Styling
import "./style.scss";

const ProjectsGrid = ({ projects, animate = true, limit = false }) => {
  const amount_projects = projects.length;
  const width = useCurrentWidth();
  const className = "projects-grid";

  // Swap projects before render (fixes items rebounce)
  let projects_parsed =
    width > sizes.small ? swap_array_elements(projects) : projects;

  // Slice array if bigger than limit
  if (limit === true && limits.amount_projects < projects_parsed.length)
    projects_parsed = projects_parsed.slice(0, limits.amount_projects);

  return (
    <section className={className}>
      <h2 className="heading">Projects</h2>
      <div className="grid">
        {width !== undefined &&
          projects_parsed.map((project, index) => {
            const { name, tags, description, img, background } =
              transform_project(project);

            return (
              <Project
                animate={animate}
                key={index}
                name={name}
                description={description}
                img={img}
                tags={tags}
                background={background}
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

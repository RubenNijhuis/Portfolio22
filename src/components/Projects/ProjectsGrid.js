import React from "react";
import {
  swap_array_elements,
  useCurrentWidth,
} from "../../utils/helper-functions";

import Project from "./Project";
import SeeMore from "../SeeMore";

const Projects = ({ projects, animate, limit = false }) => {
  const amount_projects = projects.length;
  let width = useCurrentWidth();
  let copy_projects_swap = [];

  // Swap projects before render (fixes items rebounce)
  if (width > 1024) {
    copy_projects_swap = swap_array_elements(projects);
  } else {
    copy_projects_swap = projects;
  }

  return (
    <section className="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects__grid">
        {width !== undefined &&
          copy_projects_swap.map(({ node }, index) => {
            const { name, description, backgroundImg } = node;
            const img_alt = node.backgroundImg.title;
            const img_url = node.backgroundImg.file.url;
              const tags = node.tags.split(" ");
            return (
              <Project
                animate={animate}
                key={index}
                name={name}
                description={description}
                img={img_url}
                img_alt={img_alt}
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

export default Projects;

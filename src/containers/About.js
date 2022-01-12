import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ about, interests, photo, cv }) => {
  const formatted_intersts = interests.split(",");
  const img = getImage(photo);

  return (
    <section class="about-small">
      <div class="aside">
        <div class="img-wrapper">
          <div class="img">
            <GatsbyImage image={img} alt={photo.title} />
          </div>
        </div>
        <div class="personalia">
          <div class="interests">
            <div class="title">Location</div>
            <div class="items">
              <p>Amsterdam</p>
              <p>Paris</p>
              <p>New York</p>
              <p>Nice</p>
            </div>
          </div>
          <div class="interests">
            <div class="title">Interests</div>
            <div class="items">
              <p>3D Graphics</p>
              <p>Interactive Design</p>
              <p>Startup</p>
            </div>
          </div>
          <div class="interests">
            <div class="title">Tags</div>
            <div class="items">
              <p>Front-end</p>
              <p>Design</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">{renderRichText(about, {})}</div>
    </section>
  );
};

export default About;

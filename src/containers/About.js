import React from "react";
import arrow from "assets/icons/arrow-icon-black.svg";
import { Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ about, interests, photo, cv }) => {
  const formatted_intersts = interests.split(",");
  const img = getImage(photo);

  return (
    <section className="about-small">
      <div className="about-small__profile">
        <GatsbyImage image={img} alt={photo.title} />
      </div>
      <div className="about-small__personalia">
        <div>
          <p>Codam Coding College</p>
          <p>MSc Computer Graphics '24</p>
        </div>
        <div>
          <p>Founder</p>
          <p>Louder Minds</p>
        </div>
        <div>
          <p>Current endeavour</p>
          <p style={{ marginBottom: 0 }}>Interactive Design</p>
        </div>
      </div>
      <div className="about-small__story">{renderRichText(about, {})}</div>
      <div className="about-small__interests">
        {formatted_intersts.map((interest, index) => (
          <span key={index}>{interest}</span>
        ))}
      </div>
      <div className="about-small__contact">
        <a target="_" href={cv}>
          <p>Curriculum Vitae</p>
          <img src={arrow} alt="arrow" />
        </a>
        <span className="about-small__contact__line" />
        <Link to="/contact">
          <p>Looking To Collaborate?</p>
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </section>
  );
};

export default About;

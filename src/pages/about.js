import React from "react";

// Data aggregation && formattings
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Arrow from "components/Arrow";
import Layout from "components/Layout";
import Tags from "components/Tags";

const AboutPage = ({ data }) => {
  const { photo, expanded_about, education, work } = data.about;

  const cv = data.cv.file.url;

  const work_split = work.work.split("\n");
  const work_split_items = work_split.map((item, index) => item.split(" | "));

  const education_split = education.education.split("\n");
  const education_split_items = education_split.map((item, index) =>
    item.split(" | ")
  );

  const photo_parsed = getImage(photo);

  return (
    <Layout>
      <section className="introduction">
        <div className="titles">
          <div className="nicknames">
            <div className="nick-name-wrapper">
              <h2>Developer</h2>
            </div>
            <div className="nick-name-wrapper">
              <h2>NFT Collector</h2>
            </div>
          </div>
          <div className="nicknames">
            <div className="nick-name-wrapper">
              <h2>Designer</h2>
            </div>
            <div className="nick-name-wrapper">
              <h2>Color lover</h2>
            </div>
          </div>
          <div className="nicknames">
            <div className="nick-name-wrapper">
              <h2>Artist</h2>
            </div>
            <div className="nick-name-wrapper">
              <h2>Artist</h2>
            </div>
          </div>
        </div>
        <article className="introduction__text">
          <h1 className="heading">About</h1>
          {renderRichText(expanded_about)}
        </article>
        <div className="introduction__image">
          <div className="introduction__image--wrapper">
            <GatsbyImage image={photo_parsed} alt={photo.title} />
          </div>
          <div className="links">
            <a href="/projects">
              <p>See previous work</p>
              <Arrow theme="light" />
            </a>
            <span className="about__contact__line" />
            <a href="/journals">
              <p>Look at recent updates</p>
              <Arrow theme="light" />
            </a>
            <span className="about__contact__line" />
            <a target="_" href={cv}>
              <p>Curriculum Vitae</p>
              <Arrow theme="light" />
            </a>
            <span className="about__contact__line" />
          </div>
        </div>
      </section>
      <div className="interests">
        <div className="interests__tags" />
      </div>
      <section>
        <div className="timeline_block">
          <h2>Work</h2>
          <div className="timeline_block__moments">
            {work_split_items.map(
              ([job, company, location, year, active], index) => {
                const active_class = active === "active" ? "active" : "";
                return (
                  <div className={`timeline_block__item ${active_class}`}>
                    <div className="title">
                      <h4 className="company">{company}</h4>
                      <span className="bubble" />
                      <h4 className="job">{job}</h4>
                      <span className="bubble" />
                      <h4 className="location">{location}</h4>
                    </div>
                    <p className={`year`}>{year}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="timeline_block">
          <h2>Education</h2>
          <div className="timeline_block__moments">
            {education_split_items.map(
              ([course, school, location, year, active], index) => {
                const active_class = active === "active" ? "active" : "";
                console.log(active);
                return (
                  <div
                    className={`timeline_block__item ${active_class}`}
                    key={index}
                  >
                    <div className="title">
                      <h4 className="company">{course}</h4>
                      <span className="bubble" />
                      <h4 className="job">{school}</h4>
                      <span className="bubble" />
                      <h4 className="location">{location}</h4>
                    </div>
                    <p className="year">{year}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <div className="contact__content">
            <div className="greeting">
              <p>
                Let's get a ☕️ / 🍺 and discuss your idea. Let's make someting
                great
              </p>
              <p>
                My knowledge is best used with products regarding websites, apps
                and digital design. But being an entrepeneur and unique idea
                loving person, I would always like to discuss your next project
                in whatever shape it may be
              </p>
              <p>
                Hope to hear something from you,
                <br />
                Cheers from Ruben
              </p>
            </div>
            <div className="items">
              <div>
                <h4>E-mail</h4>
                <p>contact@rubennijhuis.com</p>
              </div>
              <div>
                <h4>Louder Minds</h4>
                <p>contact@louderminds.studio</p>
              </div>
              <div>
                <a href="#">Curriculum Vitae</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    about: contentfulAbout {
      education {
        education
      }
      work {
        work
      }
      expanded_about {
        raw
      }
      photo {
        title
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 3000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }

    cv: contentfulAsset(title: { eq: "cv" }) {
      file {
        url
      }
    }
  }
`;

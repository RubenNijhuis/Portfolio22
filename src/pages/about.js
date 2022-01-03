import React from "react";

// Data aggregation && formattings
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Arrow from "components/Arrow";
import Layout from "components/Layout";
import Tags from "components/Tags";

const AboutPage = ({ data }) => {
  const {
    photo,
    expanded_about,
    interests,
    education,
    work_experience,
    credits,
  } = data.about;

  const cv = data.cv.file.url;

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
      <div className="timeline_block">
        <h2>Work</h2>
        <div className="timeline_block__moments">
          <div className="active">
            <p>
              Louder Minds - Founder <span className="circle"/> Amsterdam, NL
            </p>
            <p>20 - Present</p>
          </div>
          <div>
            <p>
              Dept Digital Agency - Freelance <span className="circle"/> Amsterdam, NL
            </p>
            <p>21</p>
          </div>
          <div>
            <p>
              ROC Amstelland - Web Design Teacher <span className="circle"/> Amstelveen, NL
            </p>
            <p>20</p>
          </div>
          <div>
            <p>
              Devign.it - Internship <span className="circle"/> Amsterdam, NL
            </p>
            <p>20</p>
          </div>
          <div>
            <p>
              SuperHero CheeseCake - Internship <span className="circle"/> Amsterdam, NL
            </p>
            <p>19</p>
          </div>
          <div>
            <p>
              Dept Digital Agency - Internship <span className="circle"/> Amsterdam. NL
            </p>
            <p>18</p>
          </div>
        </div>
      </div>
      <div className="timeline_block">
        <h2>Education</h2>
        <div className="timeline_block__moments">
          <div>
            <p>
              M.Sc in Graphics Programming at 42 New York <span className="circle"/> New
              York, USA
            </p>
            <p>'24</p>
          </div>
          <div className="active">
            <p>
              B.Sc in Software Development at Codam Coding College{" "}
              <span className="circle"/> Amsterdam, NL
            </p>
            <p>21 - Present</p>
          </div>
          <div>
            <p>
              Software Development at ROC Amstelland (MBO) <span className="circle"/>{" "}
              Amstelveen, NL
            </p>
            <p>21</p>
          </div>
          <div>
            <p>
              Vocational Secondary at Media College (VMBO) <span className="circle"/>{" "}
              Amsterdam, NL{" "}
            </p>
            <p>'24</p>
          </div>
          <div>
            <p>
              Pre University Secondary (VWO) <span className="circle"/> Amsterdam, NL
            </p>
            <p>20</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    about: contentfulAbout {
      interests
      credits
      education
      work_experience
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

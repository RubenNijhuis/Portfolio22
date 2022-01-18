import React from "react";

// Data aggregation && formattings
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

// Components
import Arrow from "components/Arrow";
import Layout from "components/Layout";
import TimeLineBlock from "components/TimeLineBlock";
import AssetHandler from "components/AssetHandler";

// Styling
import "styling/layouts/about-page.scss";

const AboutPage = ({ data }) => {
  const { photo, expanded_about, education, work } = data.about;

  const cv = data.cv.file.url;

  const work_items = [...work.work.split("\n")].map((item) =>
    item.split(" | ")
  );
  const education_items = [...education.education.split("\n")].map((item) =>
    item.split(" | ")
  );

  return (
    <Layout>
      <h1 className="heading">About</h1>
      <section className="introduction">
        {/* <div className="titles">
          <div className="nicknames">
            <div className="nick-name-wrapper">
              <h2>Developer</h2>
            </div>
            <div className="nick-name-wrapper">
              <h2>Web Monk</h2>
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
              <h2>Fancyman</h2>
            </div>
          </div>
        </div> */}
        <article className="introduction__text">
          {renderRichText(expanded_about)}
        </article>
        <div className="introduction__image">
          <div className="introduction__image--wrapper">
            <AssetHandler asset={photo} />
          </div>
          <div className="links">
            <Link to={"/projects"}>
              <p>See previous work</p>
              <Arrow theme="light" />
            </Link>
            <span className="about__contact__line" />
            <Link to={"/journal"}>
              <p>Look at recent updates</p>
              <Arrow theme="light" />
            </Link>
            <span className="about__contact__line" />
            <a noreferrer="true" target="_" href={cv}>
              <p>Curriculum Vitae</p>
              <Arrow theme="light" />
            </a>
            <span className="about__contact__line" />
          </div>
        </div>
      </section>
      {/* <div className="interests">
        <div className="interests__tags" />
      </div> */}
      <section>
        <TimeLineBlock title="Work" items={work_items} />
        <TimeLineBlock title="Education" items={education_items} />
      </section>
      <section>
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
                <a href={cv} target="_">
                  Curriculum Vitae
                </a>
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
        gatsbyImageData(width: 2000, placeholder: BLURRED)
        file {
          url
          contentType
        }
      }
    }

    cv: contentfulAsset(title: { eq: "cv" }) {
      file {
        url
      }
    }
  }
`;

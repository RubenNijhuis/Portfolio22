import React from "react";

// Styling
import "./style.scss";

const Contact = ({ cv }) => {
  return (
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
              loving person, I would always like to discuss your next project in
              whatever shape it may be
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
  );
};

export default Contact;

import React from "react";

// Styling
import "./style.scss";

const Intro = () => {
  const className = "intro-banner";
  return (
    <section className={className}>
      <div className="content">
        <p>
          My name is Ruben and I create Digital Products using Creative Coding
          and Interactive Design to realize ideas
        </p>
      </div>
    </section>
  );
};

export default Intro;

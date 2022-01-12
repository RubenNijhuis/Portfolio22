import React from "react";

const TimeLine = ({ title, items }) => {
  return (
    <div className="timeline_block">
      <h2>{title}</h2>
      <div className="timeline_block__moments">
        {items.map(([main, secondary, location, year, active], index) => {
          const active_class = active === "active" ? "active" : "";
          return (
            <div className={`timeline_block__item ${active_class}`} key={index}>
              <div className="title">
                <h4 className="company">{main}</h4>
                <span className="bubble" />
                <h4 className="job">{secondary}</h4>
                <span className="bubble" />
                <h4 className="location">{location}</h4>
              </div>
              <p className="year">{year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;

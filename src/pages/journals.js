import React, { useEffect, useState } from "react";
import "../styling/main.scss";

import Nav from "../components/Nav";
import JournalsSmall from "../components/Journals/JournalsSmall";
import data from "../testing_data/journals.json";
import Title from "../components/Journals/Title";
import Media from "../components/Journals/Media";
import Footer from "../components/Footer";

import { useCurrentWidth } from "../utils/helper-functions";

const message = `Hey, you! Curious about the tools used? This portfolio was made using GatsbyJS, SCSS, ThreejS, Framer Motion and Contentful.
Found a bug or noticed something that you think you can improve? Thankfully this site is open-source, you can find it on my Github — 'https://github.com/rubennijhuis/portfolio22'
Happy coding!`;

if (navigator.userAgent.includes("Chrome") === true) {
    console.log(
        `%c${message}`,
        "color: white; background-color: black; padding: 20px; line-height: 1.4; border-radius: 6px; margin: 10px; font-size: 12px; border: 2px solid rgba(255,255,255,0.1); box-shadow: 10px 10px 10px"
    );
} else {
    console.log(
        `%c${message}`,
        "color: white; background-color: black;line-height: 1.4;font-size: 12px;"
    );
}

const useMousePosition = (lastMouseX, lastMouseY) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);
    return mousePosition;
};

const JournalsDesktop = ({
    iindex,
    year,
    newData,
    setActiveIndex,
    activeIndex,
    x,
    y,
}) => (
    <div className="year-journals">
        <h2 className="year">'{year}</h2>
        <div className="project-list">
            {newData.map(({ name, tags }, index) => (
                <Title
                    title={name}
                    tags={tags}
                    setActiveIndex={setActiveIndex}
                    index={index + iindex}
                    key={index}
                />
            ))}
        </div>
        <div className="project-media">
            {newData.map(({ url, alt }, index) => {
                let isActive = index + iindex === activeIndex;
                let xPos = x;
                let yPos = y;
                return (
                    <Media
                        url={url}
                        active={isActive}
                        x={xPos}
                        y={yPos}
                        key={index}
                        alt={alt}
                    />
                );
            })}
        </div>
    </div>
);

const JournalsPage = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const { x, y } = useMousePosition(0, 0);

    const width = useCurrentWidth();
    let year = new Date().getFullYear().toString().slice(2, 4);

    useEffect(() => {
        document.documentElement.style.setProperty("--zJournals","fixed")

        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);

    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                {width > 1024 ? (
                    <section className="journal">
                        <header className="headline">Journals</header>
                        {data.map((newData, indexMain) => {
                            let iindex = indexMain * 10 + 1;
                            if (indexMain !== 0) iindex++;
                            return (
                                <JournalsDesktop
                                    iindex={iindex}
                                    year={year--}
                                    newData={newData}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    x={x}
                                    y={y}
                                    key={indexMain}
                                />
                            );
                        })}
                    </section>
                ) : (
                        <JournalsSmall limit={false}/>
                )}
            </main>
            <Footer />
        </>
    );
};

export default JournalsPage;

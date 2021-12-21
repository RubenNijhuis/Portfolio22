import React from "react";
import profile from "../assets/images/profile.png";
import arrow from "../assets/icons/arrow-icon-black.svg";
import { Link } from "gatsby";

const About = () => (
    <section className="about">
        <div className="about__profile">
            <img
                className="about__profile__image"
                src={profile}
                alt="profile"
            />
        </div>
        <div className="about__personalia">
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
        <div className="about__story">
            <p>Ruben Nijhuis is a Designer && Developer based in Amsterdam.</p>
            <p>
                Working on the edge of design and development Ruben uses
                creative coding and interactive design to create unique digital
                experiences that wow clients and bring in awards.
            </p>
            <p>
                Currently he is pursuing a BSc in Computer Graphics at{" "}
                <a href="https://codam.nl" target="_">
                    Codam Coding College
                </a>
                . Learning new creative ways to use graphics in user interfaces
                and developing new interacttion-rich digital experiences
            </p>
        </div>
        <div className="about__interests">
            <span>Research</span>
            <span>Coding</span>
            <span>Development</span>
            <span>Peer-to-peer</span>

            <span>Design</span>
            <span>Typography</span>
            <span>3D Graphics</span>
            <span>UI && UX</span>
            <span>Animation</span>
            <span>Interactive Design</span>

            <span>NFC && RFID</span>
            <span>NFT</span>
            <span>Entrepeneurship</span>
            <span>Computer-generated Art</span>
        </div>
        <div className="about__contact">
            <a href="../assets/files/cv.txt" download="CV-Ruben-Nijhuis">
                <p>Curriculum Vitae</p>
                <img src={arrow} alt="arrow" />
            </a>
            <span className="about__contact__line" />
            <Link to="/contact">
                <p>Looking To Collaborate?</p>
                <img src={arrow} alt="arrow" />
            </Link>
        </div>
    </section>
);

export default About;

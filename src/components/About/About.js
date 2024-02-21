import React from "react";
import Header from "../Header/Header";
import "./index.css";
import { ImPointRight } from "react-icons/im";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <div className="about">
        <div className="text-container">
          <h1 className="main-heading">Know Who I'M</h1>
          <p className="description">
            Hi Everyone, I am Neelala Ramesh from Hyderabad, India.{" "}
            <br className="break" /> I am currently Learning frontend
            technologies and Backend also. <br className="break" /> I have
            completed Integrated BSc in Computer Science.
          </p>
          <h3 className="main-heading">
            Apart from coding, some other activities that I love to do!
          </h3>
          <ul className="activities">
            <li className="description">
              <ImPointRight /> Playing Games
            </li>
            <li className="description">
              <ImPointRight /> Watching About Tech Videos on Youtube
            </li>
            <li className="description">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p className="para">
            "Strive to build things that make a difference!"
          </p>
          <p className="para">--Ramesh</p>
        </div>
        <img
          src="https://github.com/soumyajit4419/Portfolio/blob/master/src/Assets/about.png?raw=true"
          alt="technology"
          className="tech"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;

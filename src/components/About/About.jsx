import { useState, useEffect } from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.png";
import Theme_pattern from "../../assets/theme_pattern.svg";
const About = () => {

  return (
    <div className="about" id="About">
        <div className="about-title">
          <h1>About me</h1>
          <img alt="No images" src={Theme_pattern} ></img>
        </div>
        <div className="about-section">
        <div className="about-left">
    <img alt="No images" src={profile_img} ></img>
       </div>
       <div className="about-right">
        <div className="about-para">
          <p>I am an experienced Frontend developer with over a decade of professional expertise in the field.
            Throughout  my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth. </p>
          <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
    </div>
    <div className="about-skills">
        <div className="about-skill"><p>HTML & CSS  </p><hr style={{width:"60%"}}/></div>
        <div className="about-skill"><p>JavaScript (ES6+)</p><hr style={{width:"70%"}}/></div>
        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
        <div className="about-skill"><p>Vue JS </p><hr style={{width:"40%"}}/></div>
        <div className="about-skill"><p>Angular </p><hr style={{width:"50%"}}/></div>
        <div className="about-skill"><p>NodeJS, ExpressJS</p><hr style={{width:"60%"}}/></div>
        <div className="about-skill"><p>MySQL</p><hr style={{width:"60%"}}/></div>
        <div className="about-skill"><p>WordPress</p><hr style={{width:"60%"}}/></div>
      </div>
      </div>
      </div>
      <div className="about-achievements">
      <div className="about-achievement">
        <h1>3+</h1>
        <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
        <h1>10+</h1>
        <p>PROJECT COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
        <h1>9+</h1>
        <p>HAPPY CLIENTS</p>
        </div>
        </div>
      </div>
  );
};
export default About;

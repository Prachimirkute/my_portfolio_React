import { useState, useEffect } from "react";
import "./Info.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from "../../assets/profile_img.png";
import resume from "../../assets/Prachi Mirkute_Resume.pdf";
const Info = () => {

  return (
    <div>
      <div className="Info" id="home">
        <img
          // width="100"
          // height="100"
          alt="No images"
          src={profile_img}
        ></img>
    <h1>
    <span>Hey there! I'm Prachi</span> , Frontend developer based in Ireland. 
      </h1>
      <h4>I am a frontend developer from Dublin, Ireland with 3+ years of experience in two companies like babylon Radio and Mobileware technology.
      </h4>
      <div className="Info-action">
        <div className="Info-connect"><AnchorLink className="anchor-link" offset='50' href='#Contact'>Connect With Me</AnchorLink></div>
        <div className="Info-resume"><a className="anchor-link" offset='50' href={resume} >My Resume</a></div>
      </div>
      </div>
      </div>
  );
};
export default Info;

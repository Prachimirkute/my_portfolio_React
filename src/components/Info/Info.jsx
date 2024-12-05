import { useState, useEffect } from "react";
import "./Info.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from "../../assets/profile_img.jpg";
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
    <span>Hey there! I'm Prachi</span> , Software Developer and Cloud Support Engineer based in Ireland. 
      </h1>
      <h4>I am a Software Developer and Cloud Support Engineer based in Dublin, Ireland, with over 3 years of experience working at companies like Babylon Radio and Mobileware Technology. I have also successfully completed the AWS re/Start Graduate Programme.
      </h4>
      {/* <div className="Info-action">
        <div className="Info-connect"><AnchorLink className="anchor-link" offset='50' href='#Contact'>Connect With Me</AnchorLink></div>
        <div className="Info-resume"><a className="anchor-link" offset='50' href={resume} >My Resume</a></div>
      </div> */}
      </div>
      </div>
  );
};
export default Info;

import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
      <div className="footer-top-left"> 
      <h4>Prachis Portfolio</h4>
          <p>I am a Software developer from Dublin, Ireland with 3+ years of experience in two companies</p>
      </div>
      <div className="footer-top-right">
                <a href='https://www.linkedin.com/in/prachi-mirkute-53a984152/'><FaLinkedin /></a>
                <a href='https://github.com/prachimirkute'><FaGithub /></a>
  {/* <div className="footer-subscribe">Subscribe</div> */}
  </div>
      </div>
      <hr/>
      <div className="footer-bottom">
      <p className="footer-bottom-left"><small>&copy; Prachi Portfolio. All rights reserved.</small></p>
      <div className="footer-bottom-right">
      <p>Privacy policy</p>
      <p>Connect With Me</p>
      </div>

  </div>
    </div>
  );
};

export default Footer;

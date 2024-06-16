// Contact.js
import React , { useState } from "react";
import "./Contact.css";
import Theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "57825f8a-bf41-4f1b-afe9-babdeed6a89c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Contact" id="Contact">
        <div className="Contact-title">
          <h1>Get in touch</h1>
          <img alt="No images" src={Theme_pattern} ></img>
        </div>
        <div className="Contact-section">
        <div className="Contact-left">
        <h1>Let's talk</h1>
        <p>I'm currently available to take an new projects,so feel free to connect.</p>
       
       <div className="Contact-details">
        <div className="Contact-detail">
        <img alt="No images" src={mail_icon} ></img>
        <p>prachimirkute27@gmail.com</p>
    </div>

    <div className="Contact-detail">
        <img alt="No images" src={call_icon} ></img>
        <p>+353 892239571</p>
    </div>

    <div className="Contact-detail">
        <img alt="No images" src={location_icon} ></img>
        <p>Dublin, Ireland</p>
    </div>
    </div>
    </div>
    <form onSubmit={onSubmit} className="Contact-right">
        <label htmlFor="">Your Name : </label>
        <input type="text" name="name" placeholder="Enter your name "/>
        <label htmlFor="">Your Email : </label>
        <input type="email" name="email" placeholder="Enter your email address "/>
        <label htmlFor="">Write your message here</label>
        <textarea rows="8" name="message" placeholder="Enter your message "/>
        <button type="submit" className="Contact-submit">Submit Now</button>
          </form>
          {/* <span>{result}</span> */}
    </div>
 </div>
  );
};

export default Contact;

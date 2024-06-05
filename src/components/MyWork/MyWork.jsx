import { useState, useEffect } from "react";
import mywork_data from "../../assets/mywork_data.js";
import Theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import "./MyWork.css";

const MyWork = () => {
  return (
    <div id="MyWork" className="MyWork">
      <div className="MyWork-title">
      <h1>Projects</h1>
        <img src={Theme_pattern}></img>
      </div>
      <div className="mywork_container">
  {mywork_data.map((work, index)=>{
    return(
      <div key={index} className="work-item">
      <a href={work.w_link} target="_blank" rel="noopener noreferrer">
        <img src={work.w_img} alt={`Work ${index}`} />
      </a>
      <p className="mywork_language">{work.w_language}</p>
    </div>
    );
  })
  }
      </div>
      <div className="mywork_showmore">
        <p>Show More</p>
      <img src={arrow_icon}></img>
      </div>
    </div>
  );
};
export default MyWork;

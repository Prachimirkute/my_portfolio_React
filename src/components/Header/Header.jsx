import { useRef, useState } from "react";
import "./Header.css";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
const [menu, setMenu] = useState("home")
const  menuRef = useRef();
const openMenu =()=>{
  menuRef.current.style.right="0";
}
const CloseMenu =()=>{
  menuRef.current.style.right="-350px";
}

  return (
      <div className="navbar">
        <h1 className="nav-title">Portfolio</h1>
        <img src={menu_open} onClick={openMenu} className="nav-menu-open"></img>

        <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={CloseMenu} className="nav-menu-close"></img>
          <li><AnchorLink className="anchor-link" href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=='home'?<img src={underline}/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset='50' href='#About'><p onClick={()=>setMenu("About")}>About Me</p></AnchorLink>{menu=='About'?<img src={underline}/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset='50' href='#MyWork'><p onClick={()=>setMenu("MyWork")}>Projects</p></AnchorLink>{menu=='MyWork'?<img src={underline}/> : <></>}</li>
          {/* <li><p>Services</p>{menu=='Services'?<img src={underline}/> : <></>}</li> */}
          <li><AnchorLink className="anchor-link" offset='50' href='#Contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu=='Contact'?<img src={underline}/> : <></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset='50' href='#Contact'>Connect With Me </AnchorLink></div>
      </div>
  );
};

export default Header;

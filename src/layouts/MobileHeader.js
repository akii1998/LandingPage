import { useEffect, useState } from "react";
import { scrollSection, stickyNav } from "../utilits";




const MobileHeader = ({headerLogo}) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);
  

  const [toggle, setToggle] = useState(false);
  return (
    <div className="devman_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          {/* <div className="logo">
            <a href="/">
              <img src={headerLogo.logo} alt="" />
            </a>
          </div> */}
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#testimonail">Testimonials</a>
            </li>
           
          <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="download_cv">
              <a href={headerLogo.joinLink}>
                Join us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;

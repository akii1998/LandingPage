
import { useEffect, useState } from "react";
import { buttonBackgroundColor, buttonTextColor, textColor } from "../components/data/DymaicCss";
import { scrollSection, stickyNav } from "../utilits";

const Header = ({ headerLogo }) => {
  const [hover, setHover] = useState("false");

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <div className="devman_tm_header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
               {/* <a className="light" href="/"> */}
            <img src={headerLogo.logo} alt="" />
            {/* </a> */}
          </div>
          <div className="menu">
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
                <a href="#join_us">Contact</a>
              </li>
              <li className="devman_tm_button" >
                {/* <a href="#join_us" style={{backgroundColor:buttonBackgroundColor.normal.color,color:buttonTextColor.color}}>
                Join us
                </a> */}
                <a
                  href={headerLogo.joinLink}
                  // className="anchor"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  style={{
                    ...buttonBackgroundColor.normal,
                    ...(hover ? buttonBackgroundColor.hover : null),color:buttonTextColor.color
                  }}
                >
                  Join us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

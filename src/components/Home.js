

import Image from "next/image";
import { useState } from "react";
import {
  buttonBackgroundColor,
  buttonTextColor,
  textColor,
} from "../../pages/DymaicCss";

const Home = ({ homeData }) => {
  const [hover, setHover] = useState(false);

  // console.log(backgroundColor.color)
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner" style={{ color: textColor.color }}>
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name">
                  {homeData.firstName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {homeData.designation} from {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    {/* <a className="anchor"  href="#join_us" style={{backgroundColor:backgroundColor.color}}>
                      Get Started
                    </a> */}
                    <button
                      onMouseEnter={() => {
                        setHover(true);
                      }}
                      onMouseLeave={() => {
                        setHover(false);
                      }}
                      style={{
                        ...buttonBackgroundColor.normal,
                        ...(hover ? buttonBackgroundColor.hover : null),
                        border: "none",
                        background: "none",
                      }}
                    >
                      <a
                        className="anchor"
                        href={homeData.joinLink}
                        style={{ color: buttonTextColor.color }}
                      >
                        Get Started
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              <div className="image">
                <img src={homeData.img} alt="" />
                <div className="main" data-img-url={homeData.img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

import { useState } from "react";
import {
  buttonBackgroundColor,
  buttonTextColor,
} from "../../pages/DymaicCss";

const Join = ({ JoinCommunitySection }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="devman_tm_section" id="join_us">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <h3>{JoinCommunitySection.title} </h3>
            <p>{JoinCommunitySection.descripation}</p>
          </div>
          <div className="devman_tm_button" id="join_us_button">
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
                href={JoinCommunitySection.joinUrl}
                style={{ color: buttonTextColor.color }}
              >
                Join us
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Join;

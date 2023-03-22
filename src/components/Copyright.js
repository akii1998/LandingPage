import {  backgroundColorMediaSubcriberandFooter, buttonTextColor, textColor } from "../../pages/DymaicCss";

const copyRightData=[
  
]

const Copyright = () => {
  return (
    <div className="devman_tm_section" id="contact">
      <div className="devman_tm_copyright"  style={{backgroundColor:backgroundColorMediaSubcriberandFooter.color,color:textColor.color}}>
        <div className="container">
          <div className="inner" >
            <div className="left wow fadeInLeft" data-wow-duration="1s"  >
              <p style={{color:buttonTextColor.color}}>
                Developed with love by{" "}
                <a
                  href="https://themeforest.net/user/codeefly"
                  rel="noreferrer"
                  target="_blank"
                  style={{color:buttonTextColor.color}}
                >
                  Rigi
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li >
                  <a href="#"style={{color:buttonTextColor.color}} >Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#" style={{color:buttonTextColor.color}}>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;

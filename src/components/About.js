import Image from "next/image";
import { backgroundColorMediaSubcriberandFooter } from "../components/data/DymaicCss";

// const aboutData = {
//   img:'/img/about/1.jpg',
//   designation: " About us",
//   text: 
//     "I have mastered all the Social Media tips and tricks. And now I feel that I should teach my community and all my fellow community on how can they make use of all these tips and make a successful source of revenue. From Telegram Access where I will give daily tips and mentor you personally to my curated courses which I have personally designed for easy understanding and quick learning.",
//   socialIcon:[
//     {logo:'fa-facebook-f',socialIconUrl:'https://www.google.com/'},
//     {logo:'fa-twitter',socialIconUrl:'https://www.google.com/'},
//     {logo:'fa-instagram',socialIconUrl:'https://www.google.com/'},
//     {logo:'fa-linkedin-in',socialIconUrl:'https://www.google.com/'},
//     {logo:'fa-pinterest',socialIconUrl:'https://www.google.com/'}
//   ]
// };

const About = ({aboutData}) => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src={aboutData.img} alt="" />
                <div className="main" data-img-url={aboutData.img} />
              </div>
            </div>
            <div className="right">
              <div className="title">
                <h3> {aboutData.designation}</h3>
              </div>
              <div className="text">
               <p>{aboutData.text}</p>
              </div>
              <div className="social-icons">
             {aboutData.socialIcon?.map((logo,i)=>{
              
              console.log("logo",aboutData.socialIcon,'index',i)
              return(
                <div key={i}>
                  <a href={logo.socialIconUrl} style={{color:backgroundColorMediaSubcriberandFooter.color}}>
                    <i  className={`fab ${logo.logo}`}  />
                  </a>
                  </div>
              )
             })}
              </div>
              {/* <div className="devman_tm_button" id="about_us">
                <a className="anchor" href="#join_us">
                  Join us 
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

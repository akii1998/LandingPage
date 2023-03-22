
// const courseData = {
//   title:'Courses',
//   description:' Dliquip ex ea commo do conse namber onequa ute irure dolor inreprehen derit in voluptate',

import Image from "next/image";
import { useState } from "react";
import { buttonBackgroundColor, buttonTextColor } from "../../pages/DymaicCss";

//   courseDataCardDetails:[
//     {
//       name: "Mobile Application",
//       img:  "img/service/3.jpg",
//       description: [
//         "Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
//         "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
//         "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
//       ],
      
//     },
//     {
//       name: "Mobile Application",
//       img:  "img/service/3.jpg",
//       description: [
//         "Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
//         "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
//         "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
//       ],
//     },
//     {
//       name: "Mobile Application",
//       img: "img/service/3.jpg",
//       description: [
//         "Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
//         "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
//         "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
//       ],
//     },

//   ]
 
// };

const Courses = ({courseData}) => {
 const[hover,setHover]=useState('false')
  return (
    <div className="devman_tm_section" id="courses">
      
        <div className="devman_tm_service">
          <div className="container">
            
            <div className="devman_tm_main_title" data-text-align="center">
              <h3>{courseData.title}</h3>
              <p>
              {courseData.description}
            </p>
            </div>
            <div className="service_list">
              <ul>
                {courseData.courseDataCardDetails.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="src" src={service.img} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      <div className="devman_tm_button" >
                  <button  onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
      }}
      style={{
        ...buttonBackgroundColor.normal,
        ...(hover ? buttonBackgroundColor.hover : null),border:'none',background:'none'
      }}>
 <a  href={service.payUrl} className="anchor" style={{color:buttonTextColor.color}}>
            Buy Now
                </a>
        </button>
        </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
  );
};
export default Courses;

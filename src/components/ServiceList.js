import Image from "next/image";
import React, { useState } from "react";
import { buttonBackgroundColor, buttonTextColor } from "../components/data/DymaicCss";

const ServiceList = ({ serviceData }) => {
  const buttonCategory = [
    { category: "beginner" },
    { category: "medium" },
    { category: "recommended" },
    { category: "Pro" },
  ];
  // const serviceData = [
  //   {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "beginner",
  //     image:  "img/service/3.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Mens Casual Premium Slim Fit T-Shirts ",
  //     price: 22.3,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "recommended",
  //     image:
  //     "img/service/3.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Mens Cotton Jacket",
  //     price: 55.99,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "recommended",
  //     image:  "img/service/3.jpg"
  //   },
  //   {
  //     id: 4,
  //     title: "Mens Casual Slim Fit",
  //     price: 15.99,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "Pro",
  //     image:  "img/service/3.jpg"
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //     price: 695,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "beginner",
  //     image:  "img/service/3.jpg"
  //   },
  //   {
  //     id: 6,
  //     title: "Solid Gold Petite Micropave ",
  //     price: 168,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "medium",
  //     image:  "img/service/3.jpg"
  //   },
  // ];
  const [filter, setFilter] = useState(serviceData.serviceCardDetails);

  // for button hover

  const [hover, setHover] = useState("false");

  const filterProduct = (cate) => {
    const updateList = serviceData.serviceCardDetails.filter(
      (x) => x.category === cate
    );
    setFilter(updateList);
  };
  const [activebutton, setActive] = useState("All");

  const ShowProducts = () => {
    return (
      <div className="main_container_list">
        <div className="buttons_category">
          <button
            className={`${activebutton === "All" ? "selected_active" : ""}`}
            onClick={() => {
              setFilter(serviceData.serviceCardDetails);
              setActive("All");
            }}
            style={{
              backgroundColor: buttonBackgroundColor.color,
              color: buttonTextColor.color,
            }}
          >
            All
          </button>
          {buttonCategory?.map((element, i) => {
            return (
              <button
                key={i}
                className={`${
                  activebutton === element.category ? "selected_active" : ""
                }`}
                onClick={() => {
                  filterProduct(element.category);
                  setActive(element.category);
                }}
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                style={{
                  ...buttonBackgroundColor.normal,
                  ...(hover ? buttonBackgroundColor.hover : null),
                  color: buttonTextColor.color,
                }}
              >
                {element.category.toUpperCase()}
              </button>
            );
          })}
          {/* <button
            className={`${
              activebutton === "beginner" ? "selected_active" : ""
            }`}
            onClick={() => {
              filterProduct("beginner");
              setActive("beginner");
            }}
            style={{
              backgroundColor: buttonBackgroundColor.color,
              color: buttonTextColor.color,
            }}
          >
            Beginner
          </button>
          <button
            className={`${activebutton === "medium" ? "selected_active" : ""}`}
            onClick={() => {
              filterProduct("medium");
              setActive("medium");
            }}
            style={{
              backgroundColor: buttonBackgroundColor.color,
              color: buttonTextColor.color,
            }}
          >
            Medium
          </button>
          <button
            className={`${
              activebutton === "Recommended" ? "selected_active" : ""
            }`}
            onClick={() => {
              filterProduct("recommended");
              setActive("Recommended");
            }}
            style={{
              backgroundColor: buttonBackgroundColor.color,
              color: buttonTextColor.color,
            }}
          >
            Recommended
          </button>
          <button
            className={`${activebutton === "Pro" ? "selected_active" : ""}`}
            onClick={() => {
              filterProduct("Pro");
              setActive("Pro");
            }}
            style={{
              backgroundColor: buttonBackgroundColor.color,
              color: buttonTextColor.color,
            }}
          >
            Pro{" "}
          </button> */}
        </div>
        <div className="service_list">
          <ul
          // className="wow fadeIn"
          // data-wow-duration="0.5s"
          // data-wow-delay="0.5s"
          >
            {filter.map((service, i) => (
              //               <li key={i}   className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
              //               data-wow-duration="1s">
              //                 <div className="list_inner">
              //                   <img className="src"
              //                     src={service.image}
              //                     alt=""
              //                   />
              //                   <h3 className="title">{service.title.substring(0, 10)}</h3>
              //                   <h5 className="">{service.category}</h5>
              //                   <p className="">{service.description.substring(0, 138)}.</p>
              //                   <div className="devman_tm_button" >
              //                   <button  onMouseEnter={()=>{
              //         setHover(true);
              //       }}
              //       onMouseLeave={()=>{
              //         setHover(false);
              //       }}
              //       style={{
              //         ...buttonBackgroundColor.normal,
              //         ...(hover ? buttonBackgroundColor.hover : null),border:'none',background:'none'
              //       }}>
              //  <a className="anchor" href="#" style={{color:buttonTextColor.color}}>
              //             Buy Now
              //                 </a>
              //         </button>
              //         </div>
              //                 </div>
              //               </li>
              <li
                className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                data-wow-duration="1s"
                key={i}
              >
                <div className="list_inner">
                  <img className="src" src={service.image} alt="" />
                  <h3 className="title">{service.title.substring(0, 10)}</h3>
                  <h5 className="">{service.category}</h5>
                  <p className="">{service.description.substring(0, 138)}.</p>
                  <div className="devman_tm_button">
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
                        href={service.payUrl}
                        style={{ color: buttonTextColor.color }}
                      >
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
    );
  };

  return (
    <div className="devman_tm_section" id="service">
      <div className="devman_tm_service">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <h3>{serviceData.title}</h3>
            <p>{serviceData.description}</p>
          </div>
          <div className="service_box">
            <ShowProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;

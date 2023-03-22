import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";

// const testimonailData = {
//   title:'What Clients Say',
//   descripation:' Dliquip ex ea commo do conse namber onequa ute irure dolor inreprehen derit in voluptate',
//   testiCard:[
//     {
//       icon: "img/svg/quote.svg",
//       descripation:
//         "Duis aute irure dolor in repre hen derit in voluptate velitesse cillum dolore eu fugiat nulla pariatur.",
//       img: "/img/testimonials/1.jpg",
//       name: "Selena Brook",
//       designation: "ABC Studio",
//     },
//     {
//       icon: "img/svg/quote.svg",
//       descripation:
//         "Duis aute irure dolor in repre hen derit in voluptate velitesse cillum dolore eu fugiat nulla pariatur.",
//       img: "/img/testimonials/1.jpg",
//       name: "Selena Brook",
//       designation: "ABC Studio",
//     },
//     {
//       icon: "img/svg/quote.svg",
//       descripation:
//         "Duis aute irure dolor in repre hen derit in voluptate velitesse cillum dolore eu fugiat nulla pariatur.",
//       img: "/img/testimonials/1.jpg",
//       name: "Selena Brook",
//       designation: "ABC Studio",
//     }, {
//       icon: "img/svg/quote.svg",
//       descripation:
//         "Duis aute irure dolor in repre hen derit in voluptate velitesse cillum dolore eu fugiat nulla pariatur.",
//       img: "/img/testimonials/1.jpg",
//       name: "Selena Brook",
//       designation: "ABC Studio",
//     },
//   ]
 
// };
const Testimonials = ({testimonailData}) => {
  const [slidertrue, setSliderture] = useState(false);

  useEffect(() => {
    dataImage();
    imgToSVG();
    setSliderture(true);
  }, []);

  return (
    <div className="devman_tm_section" id="testimonail">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            {/* <h3>Testimonial</h3> */}
            <h3>{testimonailData.title}</h3>
            <p>
             {testimonailData.descripation}
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            {slidertrue ? (
              <Swiper
                {...testimonialsSlider}
                className="owl-carousel owl-theme owl-loaded"
              >
                {testimonailData.testiCard.map((element, i) => {
                  console.log("index",i);
                  return (
                    <SwiperSlide key={i}>
                      <div className="list_inner">
                        <img className="svg" src={element.icon} alt="" />
                        <p className="text">{element.descripation}</p>
                        <div className="details">
                          <div className="image">
                            <div className="main" data-img-url={element.img} />
                          </div>
                          <div className="short">
                            <h3>{element.name}</h3>
                            <span>{element.designation}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className="owl-dots"></div>
              </Swiper>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;

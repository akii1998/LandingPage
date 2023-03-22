// const partnerLogoData = {
//   title: "Partners",
//   descripation:
//     "Dliquip ex ea commo do conse namber onequa ute irure dolor inreprehen derit in voluptate",
//   image: [
//     { img: "/img/partners/light/1.png" },
//     { img: "/img/partners/light/3.png" },
//     { img: "/img/partners/light/4.png" },
//     { img: "/img/partners/light/5.png" },
//   ],
// };

import Image from "next/image";

const Partners = ({ partnerLogoData }) => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_partners">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <h3>{partnerLogoData.title} </h3>
            <p>{partnerLogoData.descripation}</p>
          </div>
          <div className="partners_inner">
            <ul>
              {partnerLogoData.image.map((element, i) => {
                return (
                  <li key={i}>
                    <div className="list_inner">
                      <img
                        className="wow fadeIn"
                        data-wow-duration="1s"
                        src={element.img}
                        alt=""
                      />
                      <a className="devman_tm_full_link" href="#" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;

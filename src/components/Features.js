import Image from "next/image";

const features_list = [
  {
    title: "Dedication",
    icon: "img/svg/design.svg",
    text: "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
  },
  {
    title: "Smart Work",
    icon: "img/svg/development.svg",
    text: "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
  },
  {
    title: "Intelligence",
    icon: "img/svg/landing.svg",
    text: "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
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
export default Features;

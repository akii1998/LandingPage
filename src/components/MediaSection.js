// const VideoSectionPreset = [
//   {
//     title: "Media Section",
//     descripation:
//       "Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate",
//     videoUrl: "/video.mp4",
//   },
// ];

const MediaSection = ({ VideoSectionData }) => {
  return (
    <div className="devman_tm_section" id="contact_section">
      <div className="devman_tm_news">
        <div className="container">
          {VideoSectionData.map((element, i) => {
            return (
              <div key={i}>
                <div className="devman_tm_main_title" data-text-align="center">
                  <h3>{element.title} </h3>
                  <p>{element.descripation}</p>
                </div>
                <div className="news_list">
                  <ul>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <div className="list_inner">
                        <div className="">
                          <div className="main" />
                          <video
                            controls
                            style={{ width: "100%", height: "70vh" }}
                          >
                            <source src={element.videoUrl} />
                          </video>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MediaSection;

import {  backgroundColorMediaSubcriberandFooter, buttonTextColor, textColor } from "../components/data/DymaicCss";
import { lineBreak } from "../utilits";
import Counter from "./Counter";

// const counterDataBanner = [
//   { smallVlaue: false, value: 4.5, name: "Instagram \nFollowers" },
//   { smallVlaue: false, value: 40, name: "Youtube\nSubscribers" },
//   { smallVlaue: false, value: 10, name: "TIKTOK \nFollowers" },
// ];
const CounterSection = ({counterDataBanner}) => {
  return (
    <div className="devman_tm_section" id='count'>
      <div className="devman_tm_counter_section" style={{backgroundColor:backgroundColorMediaSubcriberandFooter.color}}>
        <div className="container">
          <div className="counter_list">
            <ul>
              {counterDataBanner.map((counter, i) => (
                <li key={i}>
                  <div className="list_inner">
                    <div className="wrapper">
                      <div className="value">
                        <span className="abs">
                          <Counter end={counter.value}  />
                          {counter.smallVlaue ? (
                            <label className="small">+</label>
                          ) : (
                            <label className="big">M+</label>
                          )}
                        </span>
                      </div>
                      <div className="text" >
                        <h3
                          dangerouslySetInnerHTML={lineBreak(counter.name)}
                          style={{color:buttonTextColor.color}}
                        ></h3>
                      </div>
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
export default CounterSection;

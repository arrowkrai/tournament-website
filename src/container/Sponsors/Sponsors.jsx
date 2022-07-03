import React from "react";
import intel from "../../assets/intel.png";
import logitech from "../../assets/logitech.png";
import nintendo from "../../assets/nintendo.png";
import redbull from "../../assets/redbull.png";
import "./Sponsors.scss";

const sponsorList = [
  {
    name: "intel",
    image: intel,
  },
  {
    name: "logitech",
    image: logitech,
  },
  {
    name: "nintendo",
    image: nintendo,
  },
  {
    name: "redbull",
    image: redbull,
  },
];

const Sponsors = () => {
  return (
    <div className="app__sponsors" id="sponsors">
      <div className="container">
        <div className="app__sponsors-content">
          <div className="app__sponsors-content-list">
            <ul>
              {sponsorList.map((sponsor, index) => (
                <li key={sponsor.name + index}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </li>
              ))}
            </ul>
          </div>
          <div className="app__sponsors-content-button">
            <p>
              Genesis would not be able to exist without the help from our sponsors.
              <br /> We encourage everyone to support these businesses as they support our tournament.
              <br /> If you are interested in becoming a sponsor, please contact <a href="mailto:business@genesisgaming.gg">business@genesisgaming.gg</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

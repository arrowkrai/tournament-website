import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import mkleo from "../../assets/mkleo.jpg";
import zain from "../../assets/zain.jpg";
import shuton from "../../assets/shuton.jpg";
import "./Lineup.scss";

function NextArrow(props) {
  return (
    <span className="app__lineup-slider-right" onClick={props.onClick}>
      <FiArrowRight />
    </span>
  );
}

function PrevArrow(props) {
  return (
    <span className="app__lineup-slider-left" onClick={props.onClick}>
      <FiArrowLeft />
    </span>
  );
}

const smashPlayers = [
  {
    picture: mkleo,
    name: "MkLeo",
    description:
      "MkLeo, also known simply as Leo, is a smasher from Mexico. He is widely considered to be the best Super Smash Bros. Ultimate player in the world, dominating the competitive scene since the game's release. He is currently ranked 1st on the Mexican Ultimate Power Rankings, OrionRank Ultimate: Eclipse North America, OrionRank Ultimate: Eclipse, and PGRUContenders North America.",
    twitter: "https://twitter.com/Mkleosb",
  },
  {
    picture: zain,
    name: "Zain",
    description:
      "Zain, also known as DontTestMe is a Melee Marth main from Reston, Virginia and is considered to be one of the best Melee players in the world. He is known for his incredibly lethal punish game on space animal players and methodical play against floaty characters, and is currently considered to be the best Marth player in the world.",
    twitter: "https://twitter.com/ZainNaghmi",
  },
  {
    picture: shuton,
    name: "Shuton",
    description:
      "Shuton (しゅーとん) is a Super Smash Bros. Ultimate Pyra, Mythra, and Olimar player from Fukuoka, Japan. He is considered the best Pyra and Mythra player in Japan and one of the two best Olimar players in the world, along with Dabuz. With his consistently strong performances both in Japan and abroad, he is considered one of the best players in Japan.",
    twitter: "https://twitter.com/syu_tolimar",
  },
];

const Lineup = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="app__lineup" id="competitors">
      <div className="container">
        <h1 className="app__lineup-header">Meet Your Competitors</h1>
        <Slider {...settings}>
          {smashPlayers.map((player) => (
            <div className="slider-item" key={player.name}>
              <div className="slider-item-content">
                <img src={player.picture} alt={player.name} />
                <div className="slider-item-text">
                  <h1>{player.name}</h1>
                  <p>{player.description}</p>
                  <a target="_blank" rel="noreferrer" href={player.twitter}>
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Lineup;

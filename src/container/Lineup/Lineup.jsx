import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import ab1 from "../../assets/ab1.jpeg";
import "./Lineup.scss";
import { motion } from "framer-motion";

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
    <div className="app__lineup">
      <div className="container">
        <motion.div whileInView={{ y: [50, 0], opacity: [0, 1] }} transition={{ delay: 0.25, duration: 0.5 }}>
          <h1 className="app__lineup-header">Meet Your Competitors</h1>
        </motion.div>
        <Slider {...settings}>
        <div className="slider-item">
            <div className="slider-item-content">
              <img src={ab1} alt="" />
              <div className="slider-item-text">
                <h1>MkLeo</h1>
                <p>MkLeo is known as of the best smash players in the community. He is known for playing exceptionally well at characters with peach.</p>
                <a href="">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-content">
              <img src={ab1} alt="" />
              <div className="slider-item-text">
                <h1>MkLeo</h1>
                <p>MkLeo is known as of the best smash players</p>
                <a href="">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-content">
              <img src={ab1} alt="" />
              <div className="slider-item-text">
                <h1>MkLeo</h1>
                <p>MkLeo is known as of the best smash players</p>
                <a href="">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Lineup;

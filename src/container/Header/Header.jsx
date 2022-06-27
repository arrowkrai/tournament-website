import React from "react";
import { motion } from "framer-motion";
import { GiConsoleController, GiTicket } from "react-icons/gi";
import headerbg from "../../assets/headerbg.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header">
      <div className="container">
        <motion.div whileInView={{ y: [50, 0], opacity: [0, 1] }} transition={{ duration: 0.4 }} className="app__header-motion">
          <div className="app__header-info">
            <h2>GENESIS 8</h2>
            <h1>SMASH TOURNAMENT</h1>
            <p>Compete in the Super Smash Bros community's premier tournament series.</p>
            <div className="app__header-buttons">
              <a className="text-decoration-none app__header-buttons-register" href="#register">
                <GiConsoleController />
                REGISTER NOW
              </a>
              <a className="text-decoration-none app__header-buttons-tickets" href="#tickets">
                <GiTicket />
                GET TICKETS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;

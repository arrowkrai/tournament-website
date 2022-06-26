import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FaTwitter } from 'react-icons/fa'
import { motion } from "framer-motion";
import smashball from "../../assets/smashball.png";
import "./Navbar.scss";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg app__navbar fixed-top">
      <div className="container">
        <div className="app__navbar-logo">
          <img src={smashball} alt="logo" />
        </div>
        <div className="app__navbar-links">
          <ul className="app__navbar-links">
            {["home", "competitors", "register", "location"].map((item) => (
              <li key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
            <li key="link-tickets">
              <a href="#tickets">Tickets</a>
            </li>
          </ul>
        </div>
        {/* May Implement Icons Laters
        <div className="app__navbar-icons">
          <FaTwitter />
        </div> */}

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
              <HiX onClick={() => setToggle(false)} />
              <ul className="app__navbar-links">
                {["home", "competitors", "register", "location", "tickets"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import { motion } from "framer-motion";
import ticket1 from "../../assets/ticket1.jpg";
import { GoCreditCard } from 'react-icons/go'
import { BsCheck2 } from 'react-icons/bs'
import React from "react";
import "./Tickets.scss";

const Tickets = () => {
  return (
    <div className="app__tickets">
      <div className="container">
        <div className="app__tickets-cards">
          <div className="app__tickets-card">
            <img src={ticket1} alt="" />
            <h1>One Day Pass</h1>
            <ul>
              <li><BsCheck2 /> Full access to main venue day and night</li>
              <li><BsCheck2 /> Free play on arcade/rhythm games</li>
              <li><BsCheck2 /> Top Tier Artist Alley & Vendors</li>
              <li><BsCheck2 /> Finals in the classic San Jose Civic</li>
              <li><BsCheck2 /> Tons of food options within the venue</li>
            </ul>
            <div className="app__tickets-card-price">
              <h2>$59</h2>
              <button><GoCreditCard /> PURCHASE</button>
            </div>
          </div>
          <div className="app__tickets-card">
            <h1>Card 2</h1>
          </div>
          <div className="app__tickets-card">
            <h1>Card 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

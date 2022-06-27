import { motion } from "framer-motion";
import ticket1 from "../../assets/ticket1.jpg";
import ticket2 from "../../assets/ticket2.jpg";
import ticket3 from "../../assets/ticket3.jpg";
import { GoCreditCard } from 'react-icons/go'
import { BsCheck2, BsX } from 'react-icons/bs'
import React from "react";
import "./Tickets.scss";

const Tickets = () => {
  return (
    <div className="app__tickets" id="tickets">
      <div className="container">
        <div className="app__tickets-cards">

          <div className="app__tickets-card">
            <img src={ticket1} alt="" />
            <h1>One Day Pass</h1>
            <ul>
              <li className="app__tickets-card-yes"><BsCheck2 /> Full access to main venue day and night</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Free play on arcade/rhythm games</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Top Tier Artist Alley & Vendors</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Finals in the classic San Jose Civic</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Tons of food options within the venue</li>
              <li className="app__tickets-card-no"><BsX /> Attend both days at a discounted price</li>
              <li className="app__tickets-card-no"><BsX /> Compete in the tournament series</li>
            </ul>
            <div className="app__tickets-card-price">
              <h2>$59</h2>
              <button><GoCreditCard /> PURCHASE</button>
            </div>
          </div>
          
          <div className="app__tickets-card">
            <img src={ticket2} alt="" />
            <h1>Two Day Pass</h1>
            <ul>
              <li className="app__tickets-card-yes"><BsCheck2 /> Full access to main venue day and night</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Free play on arcade/rhythm games</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Top Tier Artist Alley & Vendors</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Finals in the classic San Jose Civic</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Tons of food options within the venue</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Attend both days at a discounted price</li>
              <li className="app__tickets-card-no"><BsX /> Compete in the tournament series</li>
            </ul>
            <div className="app__tickets-card-price">
              <h2>$79</h2>
              <button><GoCreditCard /> PURCHASE</button>
            </div>
          </div>
          
          <div className="app__tickets-card">
            <img src={ticket3} alt="" />
            <h1>Competitor Pass</h1>
            <ul>
              <li className="app__tickets-card-yes"><BsCheck2 /> Full access to main venue day and night</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Free play on arcade/rhythm games</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Top Tier Artist Alley & Vendors</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Finals in the classic San Jose Civic</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Tons of food options within the venue</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Attend both days at a discounted price</li>
              <li className="app__tickets-card-yes"><BsCheck2 /> Compete in the tournament series</li>
            </ul>
            <div className="app__tickets-card-price">
              <h2>$99</h2>
              <button><GoCreditCard /> PURCHASE</button>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Tickets;

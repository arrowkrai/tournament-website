import React from "react";
import "./Location.scss";
// import {MapContainer} from "../MapContainer/MapContainer";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
const Location = () => {
  // I think location should have a white background to go along with iframe
  return (
    <div className="app__location">
      <div className="container">
        <div className="app__location-content">
          <div className="app__location-map">
            {/* API Module works but iframe works like 100x better. Keeping both for now */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6345.090779824266!2d-121.892514!3d37.3295949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccbaf6542615%3A0xec55e44f67e4380a!2s150%20W%20San%20Carlos%20St%2C%20San%20Jose%2C%20CA%2095113%2C%20USA!5e0!3m2!1sen!2sca!4v1656308749569!5m2!1sen!2sca"
              width="631"
              height="500"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <GoogleMaps latitude={37.3295949} longitude={-121.892514} /> */}
          </div>
          <div className="app__location-info">
            <h1>Our Venue</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

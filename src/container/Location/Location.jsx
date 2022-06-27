import React from "react";
import {AiFillWarning} from 'react-icons/ai'
import "./Location.scss";
const Location = () => {
  // I think location should have a white background to go along with iframe
  return (
    <div className="app__location" id='location'>
      <div className="container">
        <div className="app__location-content">
          <div className="app__location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6345.090779824266!2d-121.892514!3d37.3295949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccbaf6542615%3A0xec55e44f67e4380a!2s150%20W%20San%20Carlos%20St%2C%20San%20Jose%2C%20CA%2095113%2C%20USA!5e0!3m2!1sen!2sca!4v1656308749569!5m2!1sen!2sca"
              width="651"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=''
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="app__location-info">
            <h1>Venue Location</h1>
            <h4>150 W San Carlos St, San Jose, CA 95113, USA</h4>
            <ul>
              <li><div><AiFillWarning /></div><div><strong> If you are flying in: </strong>SJC is ideal. It has a shuttle to the VTA light rail which will take you directly in front of the venue. SFO and OAK are 45-60 min away by driving or 1.5-2 hours by public transit, and are not recommended.</div></li>
              <li><div><AiFillWarning /></div><div><strong> If you are using caltrain: </strong>The venue is 1 mile from San Jose Diridon station on Caltrain. The nearest BART station is Berryessa, about a 4 mile drive from the venue.</div></li>
              <li><div><AiFillWarning /></div><div><strong> If you are driving in: </strong>The parking lot is on Almaden Blvd between San Carlos and Woz Way. Parking will be $30/day</div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

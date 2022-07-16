import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="app__register" id="register">
      <div className="container">
        <div className="app__content">
          <div className="app__content-left">
            <h1>Register to Compete</h1>
            <h3>Against the Best Smash Players</h3>
            <p>
              This years Super Smash Bros. Ultimate tournament will feature a <strong>$20,000</strong> Prize Pool. To participate in this years tournament, enter your name and email in the form as
              well as include your Competitor Pass ID in the form message. The Competitor Pass can be purchased in the tickets section. If you have any questions or need any assistance registering,
              please email <a href="mailto:contact@genesisgaming.gg">contact@genesisgaming.gg</a>
            </p>
          </div>
          <div className="app__content-right">
            <form action="#" className="app__register-form fadeInOut">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <textarea rows="6" name="message" id="message" placeholder="Message" />
              <input type="button" value="Submit Now" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

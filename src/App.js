import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import { Footer, Header, Lineup, Navbar, Register, Sponsors, Tickets, Location } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Lineup />
      <Register />
      <Tickets />
      <Location />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;

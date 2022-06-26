import React from "react";

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

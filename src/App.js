import React from "react";

import { Footer, Header, Lineup, Navbar, Signup, Sponsors, Tickets } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Lineup />
      <Signup />
      <Tickets />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";

import {
  Header,
  WhatGPT3,
  Features,
  Possibility,
  Blog,
  Footer,
} from "./containers";
import { Navbar, Brand, CTA } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;

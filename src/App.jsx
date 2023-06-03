import { useState } from "react";

import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Slide from "./components/Slide";

function App() {
  return (
    <div className="card--container">
      <Info />
      <div className="card--content">
        <About />
        <Interests />
        <Skills />
        <Slide />
      </div>
      <Footer />
    </div>
  );
}

export default App;

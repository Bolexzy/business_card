import { useState } from "react";

import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card--container">
      <Info />
      <div className="card--content">
        <About />
        <Interests />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;

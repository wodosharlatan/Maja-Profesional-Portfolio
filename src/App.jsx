import React from "react";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Services from "./Services/Services";
import Skills from "./Skills";
import NavBar from "./NavBar";
import "./css/styles.css";
import "./css/styles.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
}

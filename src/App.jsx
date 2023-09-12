/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Mohammed Ibrahim Raza",
  title: "MLSA, GDSC Lead & Content Creator",
  email: "mohammedibrahim.raza@studentambassadors.com",
  gitHub: "https://github.com/Ibrhimovic9989",
  instagram: "https://instagram.com/ibrahimshaheer?igshid=OTJhZDVkZWE=",
  linkedIn: "https://www.linkedin.com/in/mohammed-ibrahim-raza-2a560b248",
  medium: "",
  twitter: "https://twitter.com/Mohamme60137895?t=8m2x-g9OrRjePpEFUEnTpw&s=09",
  youTube: "https://youtube.com/@MohammedIbrahim-zk2lj",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

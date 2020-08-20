import React from "react";
// import logo from "./logo.svg";
import NavBar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Meet from "./components/Meet";
import Quals from "./components/Quals";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Switch>
        <Route exact path="/about-me"> */}
      <Welcome />
      <About />
      {/* </Route> */}
      {/* <About /> */}
      <Meet />
      <Quals />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      {/* </Switch> */}
    </Router>
  );
}

export default App;

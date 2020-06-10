import React from "react";
// import logo from "./logo.svg";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/about-me">
          <About />
        </Route>
        {/* <About /> */}
        <Portfolio />
        <ContactForm />
      </Switch>
    </Router>
  );
}

export default App;

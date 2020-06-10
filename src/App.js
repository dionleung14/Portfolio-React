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
      <Switch>
        <div className="App">
          <NavBar />
          <Route exact path="/about-me">
            <About />
          </Route>
          {/* <About /> */}
          <Portfolio />
          <ContactForm />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
// import logo from "./logo.svg";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Portfolio />
      <ContactForm />
    </div>
  );
}

export default App;

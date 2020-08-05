import React, { Component } from "react";
import Header from "./Header.js";
import FirstHeader from "./FirstHeader";

export default class About extends Component {
  render() {
    return (
      <div className="w-8/12 mx-auto border border-black border-2 px-4">
        <FirstHeader text="About Me" />
        {/* <h1
          className="border border-white border-2 text-center text-4xl sticky top-0 mt-20 mb-10 pt-10"
          id="about-me"
        >
          About Me
        </h1> */}
        <div className="flex items-center justify-around border-white border-2 pt-12">
          <div>
            <img
              className="border border-red-700 border-2 mr-8"
              src="https://placekitten.com/800/1200"
              alt="headshot"
            />
            <p className="text-xs">Caption</p>
          </div>
          <div className="border border-black border-2 m-3">
            <p>
              Hi! My name is Dion Leung, and I've been a Seattle area native my
              whole life. I grew up and lived in Kent for the first 18 years of
              my life, then moved to Seattle where I attended the University of
              Washington, earning a degree in Civil and Environmental
              Engineering. A couple of years into my career, I was feeling stuck
              and pigeon-holed, unable to advance further without an advanced
              degree. I decided to switch things up completely and pursue a
              career in web-development and here I am!
            </p>
            <p>Full-Stack Web Developer</p>
            <br />
            <p>React</p>
            <br />
            <p>Express</p>
            <br />
            <p>MySQL</p>
            <br />
            <p>MySQL</p>
            <br />
            <p>
              B.S. Civil and Environmental Engineering, University of Washington
            </p>
            <br />
            <p>Seattle native</p>
            <br />
            <p>Civil and Environmental Engineer-In-Training</p>
            <br />
            <p>
              In my time as a junior web developer, I have been able to learn a
              lot of both back-end and front-end development. I still feel drawn
              towards back-end systems, in particular database management, but
              am also exploring data-science and other analytical professions.
              In my spare time I enjoy spending time outdoors (only if I take my
              allergy medicine!), playing sports like basketball, soccer,
              volleyball, and baseball, and making progress on my seemingly
              neverending list of shows to watch.
            </p>
          </div>
        </div>
        <div className="border-white border-2">
          <div>
            <img
              className="border border-red-700 border-2 mx-auto"
              src="https://placekitten.com/400/400"
              alt="headshot"
            />
            <p className="text-xs text-center">Caption</p>
          </div>
        </div>
      </div>
    );
  }
}

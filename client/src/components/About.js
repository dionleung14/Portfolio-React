import React, { Component } from "react";
// import Header from "./Header.js";
import FirstHeader from "./FirstHeader";

export default class About extends Component {
  render() {
    return (
      <div className="w-8/12 mx-auto border border-black border-2 px-4">
        <FirstHeader text="About Me" />
        <div className="flex items-center justify-around border-white border-2 px-6 py-12">
          <div className="w-1/2 mx-4 my-8">
            <img
              className="border border-red-700 border-2"
              src="https://placekitten.com/800/1200"
              alt="headshot"
            />
            <p className="text-xs">Caption</p>
          </div>
          <div className="w-1/2 border border-black border-2">
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
          </div>
        </div>
        {/* <div className="border-white border-2">
          <img
            className="border border-red-700 border-2 mx-auto"
            src="https://placekitten.com/400/400"
            alt="headshot"
          />
          <p className="text-xs text-center">Caption</p>
        </div> */}
      </div>
    );
  }
}

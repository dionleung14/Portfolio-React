import React from "react";
import FirstHeader from "./FirstHeader.js";

export default function Quals() {
  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Qualifications" />
      <div className="flex items-center justify-around px-6 py-12">
        <div className="w-1/2 mx-4 my-8">
          <img
            className="border border-red-700 border-2 mr-8"
            src="https://placekitten.com/800/1200"
            alt="headshot"
          />
        </div>
        <div className="w-1/2 mx-4">
          <p className="text-center top-0">
            innovative and analytic problem-solver passionate about developing
            apps, with a focus on mobile-first design and development
            <br />
            mention something about learning LISP through AutoCAD
            <br />
            Full-Stack Web Developer leveraging a background in civil and
            environmental engineering to build a more intuitive user experience
            on the web.
            <br />
            Strengths in meeting deadlines, communication, and teamwork.
            <br />
            Time management, data analysis, ability to work under pressure,
            leadership, creativity, ability to learn quickly, capable of
            independent work, detail-oriented, able to adapt to circumstances
          </p>
        </div>
      </div>
    </div>
  );
}

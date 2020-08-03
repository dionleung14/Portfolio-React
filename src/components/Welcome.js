import React from "react";
import photograph from "./photos/linkedin-Seattle.jpg";
import Header from "./Header";

export default function Welcome() {
  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      {/* <div className="border border-white bg-blue-400 bg-opacity-50 sticky top-0 mt-20 mb-2 pt-10 pb-10">
        <h1 className="text-center text-2xl">hello</h1>
      </div> */}
      <div className="border border-red-500 bg-red-400 bg-opacity-50 top-0 pt-20">
        <Header text="Hello world uwu" />
      </div>
      <div className="border border-red-500 bg-green-400 bg-opacity-50 sticky top-0 pt-20">
        <h1 className="text-center text-4xl top-0 pt-10">Text with photo</h1>
        <img
          src={photograph}
          // className="object-center ml-2 h-40"
          id="photographhhhhhh"
          alt="Seattle-skyline"
        />
      </div>
    </div>
  );
}

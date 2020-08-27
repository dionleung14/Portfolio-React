import React from "react";
import FirstHeader from "./FirstHeader.js";

export default function Portfolio() {
  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Portfolio, selected works" />
      <br />
      <h1>Text for portfolio here?</h1>
      <div className="flex items-center justify-around">
        <div>
          <img
            className="w-1/6 border border-red-700 border-2 mr-8"
            src="https://placekitten.com/800/1200"
            alt="headshot"
          />
          <h3>Caption for this portfollio item</h3>
        </div>
        <img
          className="w-1/6 border border-red-700 border-2 mr-8"
          src="https://placekitten.com/800/1200"
          alt="headshot"
        />
        <img
          className="w-1/6 border border-red-700 border-2 mr-8"
          src="https://placekitten.com/800/1200"
          alt="headshot"
        />
      </div>
      <h1 className="text-center top-0 mb-8">Text for portfolio here?</h1>
    </div>
  );
}

import React from "react";
import FirstHeader from "./FirstHeader.js";

export default function Portfolio() {
  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Portfolio, selected works" />
      <h1 className="text-center sticky top-0">
        This is supposed to be my portfolio
      </h1>
    </div>
  );
}

import React from "react";
import FirstHeader from "./FirstHeader.js";

export default function Meet() {
  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Meet me" />
      <h1 className="text-center sticky top-0">
        This is where i give more info about myself. About should have more
        professional stuff
      </h1>
      <br />
    </div>
  );
}

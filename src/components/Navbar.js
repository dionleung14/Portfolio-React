import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-around border-solid border-2 border-black w-full py-8 fixed top-0 mb-10">
      <div>
        <text className="text-4xl">Welcome</text>
      </div>
      <div>
        <text className="text-lg">Hamburger</text>
      </div>
    </div>
  );
}

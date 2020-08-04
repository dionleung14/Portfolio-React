import React from "react";

export default function Header(props) {
  return (
    <h1 className="border border-white border-2 text-center text-4xl sticky top-0 pt-2 z-20">
      {props.text}
    </h1>
  );
}

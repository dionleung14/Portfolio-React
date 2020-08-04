import React from "react";

export default function FirstHeader(props) {
  return (
    <h1 className="border border-white border-2 text-center text-5xl sticky top-0 pt-32">
      {props.text}
    </h1>
  );
}

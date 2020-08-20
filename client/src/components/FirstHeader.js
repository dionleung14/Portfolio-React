import React from "react";

export default function FirstHeader(props) {
  return (
    <h1 className="border border-red-700 border-4 text-center text-5xl bg-white sticky top-0 pt-32">
      {props.text}
    </h1>
  );
}

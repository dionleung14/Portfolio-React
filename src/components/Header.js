import React from "react";

export default function Header(props) {
  return (
    <div>
      <h1 className="text-center text-4xl top-0 pt-10">{props.text}</h1>
    </div>
  );
}

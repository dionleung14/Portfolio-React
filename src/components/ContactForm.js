import React, { useState } from "react";

export default function ContactForm() {
  const [inputName, setInputName] = useState({
    inputField: "",
  });

  const handleInput = (event) => {
    setInputName({
      inputField: event.target.value,
    });
  };

  return (
    <div className="sticky my-3 py-10">
      <form className="text-center">
        <input
          type="text"
          value={inputName.inputField}
          onChange={handleInput}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Text being typed: {inputName.inputField}</h1>
        <h1>This form should be at the bottom of the page</h1>
      </form>
    </div>
  );
}

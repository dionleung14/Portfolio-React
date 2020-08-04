import React, { useState } from "react";
import FirstHeader from "./FirstHeader";

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
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Contact me!" />
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

        {/* <form> */}
        {/* <!-- Name, Email, and phone number --> */}
        <div class="row">
          {/* <!-- Name --> */}
          <div class="col-lg-4 col-md-12">
            <div class="form-group">
              <label for="viewerName">Name</label>
              <input type="name" class="form-control" id="viewerName" />
            </div>
          </div>
          {/* <!-- Email --> */}
          <div class="col-lg-5 col-md-12">
            <div class="form-group">
              <label for="inputEmail">Email address</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                I'll never share your email with anyone else.
              </small>
            </div>
          </div>
          {/* <!-- Phone number --> */}
          <div class="col-lg-3 col-md-12">
            <label for="phoneNumber">Phone Number</label>
            <input type="phonenumber" class="form-control" id="phoneNumber" />
          </div>
        </div>

        {/* <!-- Message --> */}
        <div class="row">
          <div class="col-12">
            <label for="message">Message</label>
            <input type="message" class="form-control" id="message" />
          </div>
        </div>

        {/* <!-- Preferred method of contact checkboxes --> */}
        <div class="row">
          <div class="col-3">
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="phoneCall" />
              <label class="form-check-label" for="phoneCall">
                I prefer getting a call!
              </label>
            </div>
          </div>
          <div class="col-3">
            <input type="checkbox" class="form-check-input" id="phoneMessage" />
            <label class="form-check-label" for="phoneMessage">
              I prefer getting a text!
            </label>
          </div>
          <div class="col-3">
            <input type="checkbox" class="form-check-input" id="emailContact" />
            <label class="form-check-label" for="emailContact">
              I prefer getting an email!
            </label>
          </div>
          {/* <!-- Empty column for spacing --> */}
          <div class="col-3"></div>
        </div>

        {/* <!-- Submit button --> */}
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        {/* </form> */}
        <h1>This form should be at the bottom of the page</h1>
      </form>
    </div>
  );
}

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("I was submitted");
  };

  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Contact me!" />
      <div className="testclass">
        <h3 className="w-3/4 my-8">
          Hit me up! Have any questions? Want to collaborate together? Secretly
          dying to know my favorite song? Send me an email and I'll get back to
          you as soon as I can!
        </h3>
        <form className="text-center" id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputName.inputField}
            onChange={handleInput}
          />
          <h1>Text being typed: {inputName.inputField}</h1>

          {/* <form> */}
          {/* <!-- First and Last Name --> */}
          <div className="flex items-center justify-around border-white border-2 px-6 py-12">
            {/* <!-- First Name --> */}
            <div className="w-1/4 mx-4 border-blue-600 border-2">
              <label htmlFor="viewerName">First Name</label>
              <input type="name" className="" id="first-name" required />
            </div>
            {/* <!-- Last Name --> */}
            <div className="w-1/4 mx-4 border-blue-600 border-2">
              <label htmlFor="viewerName">Last Name</label>
              <input type="name" className="" id="last-name" />
            </div>
          </div>

          {/* <!-- Email and phone number --> */}
          <div className="flex items-center justify-around border-white border-2 px-6 py-12">
            <div className="w-1/4 mx-4 border border-red-200 border-2">
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="email"
                className=""
                id="inputEmail"
                aria-describedby="emailHelp"
                required
              />
              <br />
              <small id="emailHelp" className="form-text text-muted">
                I'll never share your email with anyone else.
              </small>
            </div>
            {/* <!-- Phone number --> */}
            <div className="w-1/4 mx-4 border border-red-200 border-2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="phonenumber" className="" id="phoneNumber" />
              <br />
              <small id="emailHelp" className="form-text text-muted">
                I'll never share your phone number with anyone else either.
              </small>
            </div>
          </div>

          {/* Subject */}
          <div className="w-1/4 mx-4">
            <div className="">
              <label htmlFor="viewerName">Subject</label>
              <select
                type="name"
                className=""
                id="subject"
                placeholder="Please select an option"
              >
                <option value="none" defaultValue disabled hidden>
                  Please select an option
                </option>
                <option value="choice">Networking</option>
                <option value="choice">Inquiry</option>
                <option value="choice">Collaboration</option>
                <option value="choice">Other (specify in message)</option>
              </select>
            </div>
          </div>

          {/* <!-- Message --> */}
          <div className="test">
            <div className="w-full">
              <label htmlFor="message">Message</label>
              <input type="message" className=" w-full" id="message" required />
            </div>
          </div>

          {/* <!-- Preferred method of contact checkboxes --> */}
          <div className="">
            <h1>How would you like me to respond? Check all that apply</h1>
            <div className="col-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="emailContact"
              />
              <label className="form-check-label" htmlFor="emailContact">
                Email me!
              </label>
            </div>
            <div className="">
              <div className=" form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="phoneCall"
                />
                <label className="form-check-label" htmlFor="phoneCall">
                  Call me!
                </label>
              </div>
            </div>
            <div className="col-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="phoneMessage"
              />
              <label className="form-check-label" htmlFor="phoneMessage">
                Text me!
              </label>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          {/* </form> */}
          <h1>This form should be at the bottom of the page</h1>
        </form>
      </div>

      {/* Copied from tailwind docs */}
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

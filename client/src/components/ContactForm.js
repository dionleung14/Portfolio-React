import React, { useState } from "react";
import FirstHeader from "./FirstHeader";
import API from "../utils/API";

export default function ContactForm() {
  const logged = () => {
    console.log("completed");
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    let contactMethodCheck = Object.values(contactMethodState);
    if (contactMethodCheck.includes(true)) {
      let { call, email, text } = contactMethodState;
      let {
        firstName,
        lastName,
        emailAddress,
        phNum,
        subject,
        message,
      } = formState;
      let contactFormFilled = {
        firstName,
        lastName,
        emailAddress,
        phNum,
        subject,
        message,
        call,
        email,
        text,
      };
      API.submitMessage(contactFormFilled).then((res) =>
        logged().catch((err) => console.log(err))
      );
      console.log(contactFormFilled);
    } else {
      alert("Please select a method for me to reach you");
    }
  };

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phNum: 0,
    subject: "",
    message: "",
  });

  const handleInput = (event) => {
    event.preventDefault();
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const [contactMethodState, setContactMethodState] = useState({
    email: true,
    call: false,
    text: false,
  });

  const contactMethodStr = (string) => {
    let firstLet = string.slice(0, 1);
    let rest = string.slice(1);
    let combined = firstLet.toUpperCase().concat(rest);
    let printed = combined + " me!";
    return printed;
  };

  const handleToggle = ({ target }) =>
    setContactMethodState((s) => ({ ...s, [target.name]: !s[target.name] }));

  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Contact me!" />
      <div className="testclass">
        <h3 className="w-3/4 my-8">
          Hit me up! Have any questions? Want to collaborate together? Secretly
          dying to know my favorite song? Send me an email and I'll get back to
          you as soon as I can!
        </h3>
        <form
          className="text-center"
          id="contact-form"
          onSubmit={handleSubmission}
        >
          {/* <input
            type="text"
            value={inputName.inputField}
            onChange={handleInput}
          />
          <h1>Text being typed: {inputName.inputField}</h1> */}

          {/* <form> */}
          {/* <!-- First and Last Name --> */}
          <div className="flex items-center justify-around border-white border-2 px-6 py-12">
            {/* <!-- First Name --> */}
            <div className="w-1/4 mx-4 border-blue-600 border-2">
              <label htmlFor="firstName">First Name</label>
              <input
                className="form-control"
                type="text"
                value={formState.firstName}
                onChange={handleInput}
                placeholder="First Name"
                name="firstName"
                // id="first-name"
                required
              />
            </div>
            {/* <!-- Last Name --> */}
            <div className="w-1/4 mx-4 border-blue-600 border-2">
              <label htmlFor="viewerName">Last Name</label>
              <input
                type="name"
                className=""
                id="last-name"
                onChange={handleInput}
                value={formState.lastName}
                name="lastName"
              />
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
                onChange={handleInput}
                name="emailAddress"
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
              <input
                type="phonenumber"
                className=""
                id="phoneNumber"
                onChange={handleInput}
                name="phNum"
              />
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
                value={formState.subject}
                name="subject"
                onChange={handleInput}
                required
              >
                <option value="Networking">Networking</option>
                <option value="Inquiry">Inquiry</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other (specify in message)</option>
              </select>
            </div>
          </div>

          {/* <!-- Message --> */}
          <div className="test">
            <div className="w-full">
              <label htmlFor="message">Message</label>
              <input
                type="message"
                className=" w-full"
                id="message"
                name="message"
                onChange={handleInput}
                required
              />
            </div>
          </div>

          {/* <!-- Preferred method of contact checkboxes --> */}
          <div className="">
            <h1>How would you like me to respond? Check all that apply</h1>
            <div>
              {Object.keys(contactMethodState).map((key) => (
                <div className="open">
                  <input
                    type="checkbox"
                    onChange={handleToggle}
                    key={key}
                    name={key}
                    checked={contactMethodState[key]}
                  />
                  <label>{contactMethodStr(key)}</label>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <div className="row">
            <button
              type="submit"
              className="border border-green-400 py-2 px-4 bg-green-400"
            >
              Submit
            </button>
          </div>
          {/* <h1>This form should be at the bottom of the page</h1> */}
        </form>
      </div>

      {/* Copied from tailwind docs */}
      {/*<form className="w-full max-w-lg">
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
        </form>*/}
    </div>
  );
}

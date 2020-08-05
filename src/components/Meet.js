import React from "react";
import FirstHeader from "./FirstHeader.js";

export default function Meet() {
  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Meet me" />
      <h1 className="text-center sticky top-0">
        <p>
          Hi! My name is Dion Leung, and I've been a Seattle area native my
          whole life. I grew up and lived in Kent for the first 18 years of my
          life, then moved to Seattle where I attended the University of
          Washington, earning a degree in Civil and Environmental Engineering. A
          couple of years into my career, I was feeling stuck and pigeon-holed,
          unable to advance further without an advanced degree. I decided to
          switch things up completely and pursue a career in web-development and
          here I am!
        </p>
        <br />
        <p>
          In my time as a junior web developer, I have been able to learn a lot
          of both back-end and front-end development. I still feel drawn towards
          back-end systems, in particular database management, but am also
          exploring data-science and other analytical professions. In my spare
          time I enjoy spending time outdoors (only if I take my allergy
          medicine!), playing sports like basketball, soccer, volleyball, and
          baseball, and making progress on my seemingly neverending list of
          shows to watch.
        </p>
      </h1>
      <br />
    </div>
  );
}

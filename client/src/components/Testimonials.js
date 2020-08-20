import React from "react";
import FirstHeader from "./FirstHeader";

export default function Testimonials() {
  return (
    <div className="w-8/12 mx-auto border border-black border-2 px-4">
      <FirstHeader text="Testimonials" />
      <div className="flex items-center justify-around border-white border-2 px-6 py-12">
        <div>
          <h1 className="text-center top-0">Testimonial 1</h1>
        </div>
        <div>
          <h1 className="text-center top-0">Testimonial 2</h1>
        </div>
        <div>
          <h1 className="text-center top-0">Testimonial 3</h1>
        </div>
      </div>
    </div>
  );
}

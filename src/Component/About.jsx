




import React, { useState } from "react";

import m1 from "./photos/photo2.jpeg";
import m2 from "./photos/m2.jpeg";
import m3 from "./photos/m3.jpeg";
import m4 from "./photos/m4.jpeg";
import m5 from "./photos/photo.jpeg";
import m6 from "./photos/m6.jpeg";
import m7 from "./photos/m7.jpeg";
import m8 from "./photos/photo1.jpeg";
import profile from "./photos/profile.png";
import model from "./photos/board.png"
import krisha from "./photos/img01.jpeg";
import krisha2 from "./photos/krisha1.jpeg";
import krisha3 from "./photos/krisha3.jpeg";
const aestheticImages = [m1, m2, m3, m4, m5, m6, m7, m8];
const images = [krisha, krisha2, krisha3];

const PortfolioCollage = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const center = images[index];
  const left = images[(index - 1 + images.length) % images.length];
  const right = images[(index + 1) % images.length];

  return (
    <div>

      {/* Collage Section */}
      <div className="w-full bg-[#faf7f2] py-24 px-6 md:px-24 relative overflow-hidden">

        <div className="border-t border-dotted border-gray-400 mb-20"></div>

        <div className="relative flex justify-center items-center min-h-[500px]">

          {/* Left Image */}
          <div
            onClick={prev}
            className="absolute left-[10%] top-[20%] rotate-[-8deg] overflow-hidden rounded-xl shadow-xl cursor-pointer"
          >
            <img
              src={left}
              alt="Side"
              className="w-[250px] h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Center Image */}
          <div
            onClick={next}
            className="relative z-10 overflow-hidden rounded-xl shadow-2xl cursor-pointer"
          >
            <img
              src={center}
              alt="Main"
              className="w-[420px] h-[500px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Image */}
          <div
            onClick={next}
            className="absolute right-[10%] bottom-[10%] rotate-[8deg] overflow-hidden rounded-xl shadow-xl cursor-pointer"
          >
            <img
              src={right}
              alt="Side"
              className="w-[250px] h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

        <div className="border-t border-dotted border-gray-400 mt-20"></div>
      </div>



      {/* Quote + Description */}
      <div className="w-full bg-[#f5f0e6] py-24 px-8 md:px-20">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

  {/* QUOTE CARD */}
  <div className="bg-white p-12 rounded-2xl shadow-xl relative">

    <div className="text-7xl absolute -top-6 left-6 text-[#d6cfc4]">
      “
    </div>

    <p className="text-2xl md:text-3xl   italic text-gray-900 leading-snug">
      Whatever I do, I do with gusto, you know? Gusto!
    </p>

    <p className="mt-6 text-sm tracking-widest  text-gray-500 ">
      King Julien
    </p>

  </div>


  {/* CONTENT */}
  <div className="text-gray-800 text-lg  leading-relaxed">

    <p className="mb-6">

      Feral is my favourite word as it means wild, free, and untamed. I find inspiration in the unexpected, picking stories from the smallest details and shaping them into something bigger. Small changes, I believe, create the biggest ripples.

I’m a performer at heart. I write monologues and plays, and I love telling stories through movement and dance.

I value genuine substance over aesthetics and am drawn to simple yet impactful ideas. I don’t believe much in definitions, I choose my act of micro-rebellion every day.

At the end of it all, I’m drawn to any creative process that lets me express myself and bring ideas to life.
    </p>


  </div>

</div>

</div>

<section className="w-full py-16 sm:py-20 bg-white">

  <h2 className="text-3xl sm:text-5xl font-pinyon  text-center text-black mb-12">
    My Little Corner
  </h2>

  <div className="w-full overflow-x-auto px-4 sm:px-6 lg:px-12 scroll-smooth">
    
    <div className="flex w-max">

      <img
        src={model}
        alt="Banner Ad"
        className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-auto object-contain flex-shrink-0"
      />

      <img
        src={model}
        alt="Banner Ad"
        className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-auto object-contain flex-shrink-0"
      />

    </div>

  </div>

</section>

 {/* Bottom decorative line */}
 <div className="border-t border-dotted border-gray-400 w-full mx-10 md:mx-24 mt-10"></div>
            {/* Footer */}
            <div className="w-full py-12 flex justify-center items-center bg-white transition duration-300 ">

  <div className="flex flex-col items-center text-center">

    <h1 className="text-4xl font-pinyon text-gray-800 mb-4">
      Krisha Agrawal
    </h1>

    <p className="text-lg text-gray-600 mb-4">
      Email:{" "}
      <a
        href="mailto:Krishaagrawal850@gmail.com"
        className="text-[#1E40AF] hover:underline"
      >
        Krishaagrawal850@gmail.com
      </a>
    </p>

    <p className="text-lg text-gray-600 mb-4">
      LinkedIn:{" "}
      <a
        href="https://in.linkedin.com/in/krisha-agrawal-a89504225"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1E40AF] hover:underline"
      >
        krisha-agrawal
      </a>
    </p>

  </div>

</div>

    </div>
  );
};

export default PortfolioCollage;








// import React, { useRef, useState } from "react";
// import videoFile from "./photos/videoFile.mp4";
// import { FaPlay, FaPause, FaInstagram } from "react-icons/fa";

// import m1 from "./photos/i1.jpeg";
// import m2 from "./photos/i2.jpeg";
// import m3 from "./photos/i3.jpeg";
// import m4 from "./photos/i4.jpeg";
// import m5 from "./photos/loaderimg.jpeg";
// import m6 from "./photos/m6.jpeg";

// const images = [m1, m2, m3, m4, m5, m6];

// const Brandstory = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const togglePlay = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div>

//       {/* VIDEO SECTION */}
//       <div className="relative w-full h-[100svh] bg-black flex items-center justify-center">

// <video
//   ref={videoRef}
//   src={videoFile}
//   autoPlay
//   muted
//   loop
//   playsInline
//   className="w-full h-full object-contain md:object-cover"
// />

// {/* Overlay */}
// <div className="absolute inset-0 bg-black/30"></div>

// {/* Play Button */}
// <div className="absolute inset-0 flex items-center justify-center">
//   <button
//     onClick={togglePlay}
//     className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
//     rounded-full bg-white/20 backdrop-blur-md text-white text-xl md:text-2xl
//     border border-white/40 hover:scale-110 transition"
//   >
//     {isPlaying ? <FaPause /> : <FaPlay />}
//   </button>
// </div>

// </div>


//       {/* INSTAGRAM SECTION */}
// <div className="w-full bg-[#faf7f2] py-24 px-6 md:px-20">

//   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//     {/* LEFT CONTENT */}
//     <div>

//       <div className="flex items-center gap-3 text-pink-500 mb-4">
//         <FaInstagram className="text-2xl"/>
//         <span className="text-lg font-medium">Instagram</span>
//       </div>

//       <h2 className="text-5xl font-serif leading-tight text-gray-800">
//         Tana Bana <br/>
//         <span className="text-pink-500">Collective</span>
//       </h2>

//       <p className="mt-6 text-gray-600 max-w-md">
//         A creative archive of branding experiments, storytelling
//         visuals and curated aesthetics created for Tana Bana Collective.
//       </p>

//       <a
//         href="https://www.instagram.com/tanabanacollective_?igsh=Mm96YXp6c2RpYmRk&utm_source=qr"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block mt-8 px-8 py-3 rounded-full bg-pink-100 text-pink-600 font-medium hover:bg-pink-200 transition"
//       >
//         View Instagram →
//       </a>

//     </div>

//     {/* RIGHT GRID */}
//     <div className="grid grid-cols-3 gap-4">

//       {images.map((img, index) => (
//         <div
//           key={index}
//           className="overflow-hidden rounded-xl shadow-md"
//         >
//           <img
//             src={img}
//             alt="insta"
//             className="w-full h-40 object-cover hover:scale-110 transition duration-500"
//           />
//         </div>
//       ))}

//     </div>

//   </div>

// </div>

//     </div>
//   );
// };

// export default Brandstory;







import React, { useRef, useState } from "react";
import videoFile from "./photos/videoFile.mp4";
import { FaPlay, FaPause, FaInstagram } from "react-icons/fa";

import m1 from "./photos/i1.jpeg";
import m2 from "./photos/i2.jpeg";
import m3 from "./photos/i3.jpeg";
import m4 from "./photos/i4.jpeg";
import m5 from "./photos/loaderimg.jpeg";
import m6 from "./photos/m6.jpeg";
import work from "./photos/work1.png";
import tana from "./photos/tanabana.png";
const images = [m1, m2, m3, m4, m5, m6];

const Brandstory = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>




      {/* INSTAGRAM SECTION */}
      <div className="w-full bg-[#faf7f2] py-28 px-6 md:px-20">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

  {/* LEFT CONTENT */}
  <div>

<div className="flex items-center gap-3 text-red-500 mb-4">
  <FaInstagram className="text-2xl"/>
  <span className="text-lg tracking-wide">Instagram</span>
</div>

{/* Logo */}
<img
  src={tana}
  alt="Tana Bana Collective Logo"
  className="w-56 md:w-72 object-contain mb-6"
/>

{/* Description */}
<p className="text-gray-600 max-w-md leading-relaxed">
We host curated experential baithaks every alternate Sundays. Weaving like minded, creative people together with stories, art and play.
</p>

{/* Button */}
<a
  href="https://www.instagram.com/tanabanacollective_?igsh=Mm96YXp6c2RpYmRk&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-10 px-8 py-3 rounded-full border border-red-400 text-red-500 hover:bg-pink-100 transition"
>
  Explore Instagram →
</a>

</div>


  {/* RIGHT CREATIVE GRID */}
  <div className="relative grid grid-cols-2 gap-6">

    <img
      src={images[0]}
      className="rounded-xl shadow-lg object-cover h-56 rotate-[-3deg] hover:rotate-0 hover:scale-105 transition duration-500"
    />

    <img
      src={images[1]}
      className="rounded-xl shadow-lg object-cover h-72 rotate-[3deg] hover:rotate-0 hover:scale-105 transition duration-500"
    />

    <img
      src={images[2]}
      className="rounded-xl shadow-lg object-cover h-72 rotate-[2deg] hover:rotate-0 hover:scale-105 transition duration-500"
    />

    <img
      src={images[3]}
      className="rounded-xl shadow-lg object-cover h-56 rotate-[-2deg] hover:rotate-0 hover:scale-105 transition duration-500"
    />

  </div>

</div>

</div>
{/* Work image section  */}
<div className="w-full bg-[#faf7f2] py-24 flex justify-center">

  <div className="max-w-2xl w-full px-6">

    <img
      src={work}
      alt="Featured Work"
      className="w-full rounded-xl shadow-lg object-cover hover:scale-105 transition duration-500"
    />

  </div>

</div>

    </div>
  );
};

export default Brandstory;
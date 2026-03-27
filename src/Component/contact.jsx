// import React, { useState, useEffect } from "react";
// import teddy from "./photos/teddy1.png";
// import banner from "./photos/banner1.png";
// import loaderImg from "./photos/loader.mp4"; // change if you have separate loader image
// import Brand from "./Brandstory";
// import { Link } from "react-router-dom";

// const Contact = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3800);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">

//         {/* Logo / Image */}
//         <video
//   src={loaderImg}
//   autoPlay
//   muted
//   loop
//   playsInline
//   className="max-w-[80%] max-h-[80%] object-contain"
// >
// </video>

//         {/* Top Curtain */}
//         <div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-curtainTop"></div>

//         {/* Bottom Curtain */}
//         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black animate-curtainBottom"></div>

//       </div>
//     );
//   }

//   return (
//     <>
//       <section className="w-full min-h-screen bg-[#f9f7f2] flex items-center">
//         <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10">

//           {/* LEFT CONTENT */}
//           <div>

//           <div className="mt-10">

//           <h1 className="text-4xl md:text-5xl text-[#922B14] font-pinyon leading-tight text-center">
//   Tana Bana <br /> Collective
// </h1>

// <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto text-center">
//   Co-founded a 200+ people community across Indore and Surat, centred around play, creativity, intellectual exchange, and meaningful conversations.
// </p>

// </div>

// <img
//   src={teddy}
//   alt="design"
//   className="w-[300px] mt-8 mx-auto"
// />

//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center md:justify-end">

// {/* Video */}
// <video
//   src={loaderImg}
//   autoPlay
//   muted
//   loop
//   playsInline
//   className="h-full w-[420px] object-contain"
// >
// </video>

//           </div>

//         </div>
//       </section>

//       <Brand />
//     </>
//   );
// };

// export default Contact;



import React from "react";
import teddy from "./photos/teddy1.png";
// import loaderImg from "./photos/loader.mp4";
import Brand from "./Brandstory";

const Contact = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-[#f9f7f2] flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}
          <div>

            <div className="mt-10">
              <h1 className="text-4xl md:text-5xl text-[#922B14] font-pinyon leading-tight text-center">
                Tana Bana <br /> Collective
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto text-center">
                Co-founded a 200+ people community across Indore and Surat, centred around play, creativity, intellectual exchange, and meaningful conversations.
              </p>
            </div>

            <img
              src={teddy}
              alt="design"
              className="w-[300px] mt-8 mx-auto"
            />

          </div>

          {/* RIGHT VIDEO */}
          {/*<div className="flex justify-center md:justify-end">

            <video
              src={loaderImg}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-[420px] object-contain"
            />

          </div>*/}

        </div>
      </section>

      <Brand />
    </>
  );
};

export default Contact;
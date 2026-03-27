







import React, { useRef } from "react";
import blond from "./photos/blondlogo.jpeg";
import logo1 from "./photos/logo1.jpeg";
import logo2 from "./photos/logo2.jpeg";
import logo3 from "./photos/logo3.jpeg";
import t1 from "./photos/t1.jpeg";
import t2 from "./photos/t44.mp4";
import b1 from "./photos/b1.png";
import b2 from "./photos/b5.jpeg";
import logo5 from "./photos/logo5.jpg";
import tm from "./photos/tm.jpeg";
import tm1 from "./photos/tm1.jpeg";
import tm2 from "./photos/tm2.jpeg";
import tm3 from "./photos/tm3.jpeg";
import colgate from "./photos/final.mp4";
import mmt from "./photos/mmt.mp4";
import Brand from "./photos/Brand.mp4";
import bblogo from "./photos/bblogo.png";
import cupcake from "./photos/cupcake2.png";
import vinatge from "./photos/vintage.png";
import star from "./photos/star.png";
import star1 from "./photos/star1.png";
import star2 from "./photos/star2.png";
import riha from "./photos/rihalogo.jpeg";
import story from "./photos/new.jpeg";
import ww33 from "./photos/ww33.jpeg";
import ww55 from "./photos/ww55.png";
import tana from "./photos/tanabanavideo.mp4"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import reel from "./photos/reel.mov"
import reel1 from "./photos/reel1.mp4"
import banner from "./photos/banner01.jpeg"
import halidiram from "./photos/haldiram.mp4"
import makemytrip from "./photos/makemytrip .mp4"
const workdata = [
  {
    title: "UI Designing For Navnirman Architects",
    description:
      "Designed the UI for Navnirrman Architects, provided aesthetic direction, and conducted website audits to enhance visual appeal, usability, and functionality.",
    link: "https://navnirman-one.vercel.app/",
  },
  {
    title: "Food Is the Only Social Scene of Indore",
    description:
      "Wrote a blog on Indore, sharing observations about the city's culture and lifestyle, concluding with the launch of Tana Bana.",
    link:
      "https://foodistheonlysocialactivitybykrisha.blogspot.com/2025/02/food-is-only-social-activity-of-indore.html",
  },
];

const work = () => {
  const images = [
    { src: blond, text: "Primary Logo" },
    { src: logo1, text: "Secondary Logo" },
    { src: bblogo, text: "Mascot Logo" },
    { src: logo3, text: "Brand Mascot" },
    { src: logo2, text: "Design Elements" },
    { src: cupcake, text: "Design Elements" },
    { src: vinatge, text: "Design Elements" },
    { src: star1, text: "Design Elements" },
    { src: star2, text: "Design Elements" },
    { src: star, text: "Design Elements" },
  ];

  const images1 = [
    { src: ww55, text: "Primary Logo" },
    { src: ww33, text: "Favicon " },
    { src: b1, text: "Design Elements" },
    { src: b2, text: "Design Elements" },
  ];
// Tana Bana 
  const images2 = [
    { src: t1, text: "Primary Logo " },
    { src: tm3, text: "Design Elememts" },
    { src: tm, text: "Design elements" },
    { src: tm1, text: "Design elements" },
    { src: tm2, text: "Design elements" },
  ];

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto overflow-hidden">
      {/* Branding Section */}
      <section className="bg-gradient-to-r from-[#F6D0D7] to-[#E3E6EE] text-black py-12 sm:py-16 px-4 sm:px-6 lg:px-10">
        {/* Branding Title */}


        {/* Blond Bakery Section */}
        <div className="py-8 sm:py-10">

<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-pinyon capitalize text-[#ad1f22] mb-8 sm:mb-12">
  Blond Bakery
</h1>

<Swiper
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  }}
  navigation
  modules={[Navigation]}
  className="pb-10"
>

  {images.map((image, index) => (

    <SwiperSlide key={index} className="relative group px-2">

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] flex items-center justify-center transform transition-transform duration-300 hover:scale-105">

        <img
          src={image.src}
          alt={image.text}
          className="max-w-full max-h-full object-contain"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-2 text-center">
            {image.text}
          </p>
        </div>

      </div>

    </SwiperSlide>

  ))}

</Swiper>

</div>

      {/* Blond Bakery Story and Packaging Section */}
        <section className="py-12 sm:py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-center gap-8 sm:gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h1
                className="text-2xl sm:text-3xl text-center text-black mb-4 sm:mb-6"
                style={{ fontFamily: "Ovo" }}
              >
                Storyline
              </h1>
              <div className="h-74 sm:h-82 md:h-90 lg:h-106 w-full max-w-sm mx-auto">
                <img
                  src={story}
                  alt="Story Image"
                  className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-gray-200 transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1
                className="text-2xl sm:text-3xl text-center text-black mb-4 sm:mb-6"
                style={{ fontFamily: "Ovo" }}
              >
                Packaging
              </h1>
              <div className="h-74 sm:h-82 md:h-90 lg:h-106 w-full max-w-sm mx-auto">
                <img
                  src={logo5}
                  alt="Packaging Image"
                  className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-gray-200 transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


        {/* Tana Bana Section */}
        {/* <div className="py-8 sm:py-10">
  <h1 className="text-3xl sm:text-4xl text-center text-[#191919] font-pinyon capitalize mb-6 sm:mb-8">
    Tana Bana
  </h1>

  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      480: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
    navigation
    modules={[Navigation]}
    className="pb-10"
  >
    {images2.map((image, index) => (
      <SwiperSlide key={index} className="relative group px-2">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">

          <img
            src={image.src}
            alt={image.text}
            className="w-full h-full object-contain"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-2 text-center">
              {image.text}
            </p>
          </div>

        </div>

      </SwiperSlide>
    ))}
  </Swiper>
</div> */}



{/* <section className="py-12 sm:py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">

  <div className="flex flex-col items-center justify-center gap-8 sm:gap-10">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 w-full max-w-6xl mx-auto">



<div className="flex flex-col items-center justify-center">

  <h1
    className="text-2xl sm:text-3xl text-center text-black mb-4 sm:mb-6"
    style={{ fontFamily: "Ovo" }}
  >
    Storyline
  </h1>

  <div className="h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] w-full max-w-sm mx-auto bg-black rounded-lg shadow-xl border-4 border-gray-200 flex items-center justify-center">

    <video
      autoPlay
      loop
      muted
      playsInline
      className="max-w-full max-h-full object-contain transition-transform hover:scale-105 duration-300"
    >
      <source src={tana} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  </div>

</div>


<div className="flex flex-col items-center justify-center">

  <h1
    className="text-2xl sm:text-3xl text-center text-black mb-4 sm:mb-6"
    style={{ fontFamily: "Ovo" }}
  >
    Behind The Scenes
  </h1>

  <div className="h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] w-full max-w-sm mx-auto rounded-lg shadow-xl border-4 border-gray-200 flex items-center justify-center">

    <video
      autoPlay
      loop
      muted
      playsInline
      className="max-w-full max-h-full object-contain transition-transform hover:scale-105 duration-300"
    >
      <source src={reel} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  </div>

</div>




<div className="flex flex-col items-center justify-center">

  <h1
    className="text-2xl sm:text-3xl text-center text-black mb-4 sm:mb-6"
    style={{ fontFamily: "Ovo" }}
  >
    Final Creation
  </h1>

  <div className="h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] w-full max-w-sm mx-auto bg-black rounded-lg shadow-xl border-4 border-gray-200 flex items-center justify-center">

    <video
      autoPlay
      loop
      muted
      playsInline
      className="max-w-full max-h-full object-contain transition-transform hover:scale-105 duration-300"
    >
      <source src={reel1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  </div>

</div>

</div>

  </div>

</section> */}

      </section>






      {/* Other Work Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b bg-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-black mb-8 sm:mb-12 font-pinyon">
      Other Work
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {workdata.map((work, index) => (
        <div
          key={index}
          className="p-8 bg-white/90 backdrop-blur rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              {work.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              {work.description}
            </p>
          </div>

          <div>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#AE1F22] text-white rounded-lg font-medium tracking-wide hover:bg-red-600 transition-all duration-300 hover:scale-105"
            >
              View Project
            </a>
          </div>

        </div>
      ))}
    </div>
    {/* 🎧 Audio Section 1 */}
{/* 🎧 Audio Section 1 - Haldiram Jingle */}
<section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl sm:text-4xl font-bubbler text-black mb-8">
    Radio and Jingles
    </h2>

    <div className="p-8 bg-white/90 backdrop-blur rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
      
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Haldiram - Jingle
        </h3>

        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          Made a jingle for Haldiram Brand for Jingle Junkie Competition at MICA (2026), 
          Won Second Prize for it.
        </p>
      </div>

      <div>
        <audio controls className="w-full rounded-lg">
          <source src={halidiram} type="audio/mpeg" />
          Your browser does not support audio.
        </audio>
      </div>

    </div>

  </div>
</section>


{/* 🎧 Audio Section 2 */}
{/* 🎧 Audio Section 2 - MakeMyTrip Radio Ad */}
<section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto text-center">



    <div className="p-8 bg-gray-50 backdrop-blur rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
      
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
          MakeMyTrip — Radio Ad
        </h3>

        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          As part of an in-class assignment back in 2024, 
          I created this radio commercial for MakeMyTrip.
        </p>
      </div>

      <div>
        <audio controls className="w-full rounded-lg">
          <source src={makemytrip} type="audio/mpeg" />
          Your browser does not support audio.
        </audio>
      </div>

    </div>

  </div>
</section>
{/* 🪧 Banner Ads Section */}
<section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto text-center">


    <div className="p-8 bg-white/90 backdrop-blur rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
      
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Ads Up - Card Game 
        </h3>

        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          Design a card game where players guess brands, taglines, and agencies through clever clues and taboo words.
        </p>
      </div>

      {/* Banner Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={banner}
          alt="Brands and Brain Card Game Banner"
          className="w-full h-auto object-cover hover:scale-105 transition duration-500"
        />
      </div>

    </div>

  </div>
</section>

  </div>
</section>
    </div>
  );
};

export default work;



// import React from "react";
// import blond from "./photos/blondlogo.jpeg";
// import logo1 from "./photos/logo1.jpeg";
// import logo2 from "./photos/logo2.jpeg";
// import logo3 from "./photos/logo3.jpeg";
// import t1 from "./photos/t1.jpeg";
// import b1 from "./photos/b1.png";
// import b2 from "./photos/b5.jpeg";
// import logo5 from "./photos/logo5.jpg";
// import tm from "./photos/tm.jpeg";
// import tm1 from "./photos/tm1.jpeg";
// import tm2 from "./photos/tm2.jpeg";
// import tm3 from "./photos/tm3.jpeg";
// import bblogo from "./photos/bblogo.png";
// import cupcake from "./photos/cupcake2.png";
// import vinatge from "./photos/vintage.png";
// import star from "./photos/star.png";
// import star1 from "./photos/star1.png";
// import star2 from "./photos/star2.png";
// import story from "./photos/new.jpeg";
// import ww33 from "./photos/ww33.jpeg";
// import ww55 from "./photos/ww55.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import banner from "./photos/banner01.jpeg";
// import halidiram from "./photos/haldiram.mp4";
// import makemytrip from "./photos/makemytrip .mp4";

// /* ✅ DATA ARRAY */
// const worksData = [
//   {
//     title: "UI Designing For Navnirman Architects",
//     description:
//       "Designed the UI for Navnirrman Architects, provided aesthetic direction, and conducted website audits.",
//     link: "https://navnirman-one.vercel.app/",
//   },
//   {
//     title: "Food Is the Only Social Scene of Indore",
//     description:
//       "Wrote a blog on Indore culture and lifestyle, concluding with Tana Bana.",
//     link:
//       "https://foodistheonlysocialactivitybykrisha.blogspot.com/2025/02/food-is-only-social-activity-of-indore.html",
//   },
// ];

// /* ✅ MAIN COMPONENT */
// const Work = () => {
//   const images = [
//     { src: blond, text: "Primary Logo" },
//     { src: logo1, text: "Secondary Logo" },
//     { src: bblogo, text: "Mascot Logo" },
//     { src: logo3, text: "Brand Mascot" },
//     { src: logo2, text: "Design Elements" },
//     { src: cupcake, text: "Design Elements" },
//     { src: vinatge, text: "Design Elements" },
//     { src: star1, text: "Design Elements" },
//     { src: star2, text: "Design Elements" },
//     { src: star, text: "Design Elements" },
//   ];

//   return (
//     <div className="min-h-screen max-w-screen-2xl mx-auto overflow-hidden">

//       {/* 🔥 BRAND SECTION */}
//       <section className="bg-gradient-to-r from-[#F6D0D7] to-[#E3E6EE] py-12 px-6">

//         <h1 className="text-4xl text-center font-bold text-[#ad1f22] mb-10">
//           Blond Bakery
//         </h1>

//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             480: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           navigation
//           modules={[Navigation]}
//         >
//           {images.map((img, i) => (
//             <SwiperSlide key={i}>
//               <div className="bg-white rounded-xl p-4 shadow">
//                 <img src={img.src} alt="" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* 🔥 STORY */}
//       <section className="py-16 bg-gray-100 text-center">
//         <h2 className="text-3xl mb-6">Storyline</h2>
//         <img src={story} className="mx-auto w-72 rounded-lg shadow" />
//       </section>

//       {/* 🔥 OTHER WORK */}
//       <section className="py-16 bg-white px-6">
//         <h1 className="text-4xl text-center mb-10">Other Work</h1>

//         <div className="grid md:grid-cols-2 gap-6">
//           {worksData.map((item, index) => (
//             <div key={index} className="p-6 shadow rounded-lg">
//               <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//               <p className="mb-4">{item.description}</p>
//               <a
//                 href={item.link}
//                 target="_blank"
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔥 AUDIO */}
//       <section className="py-16 bg-gray-50 text-center">
//         <h2 className="text-3xl mb-6">Radio & Jingles</h2>

//         <audio controls className="mx-auto mb-6">
//           <source src={halidiram} type="audio/mpeg" />
//         </audio>

//         <audio controls className="mx-auto">
//           <source src={makemytrip} type="audio/mpeg" />
//         </audio>
//       </section>

//       {/* 🔥 BANNER */}
//       <section className="py-16 bg-white text-center">
//         <h2 className="text-3xl mb-6">Ads Up - Card Game</h2>
//         <img src={banner} className="mx-auto rounded-lg shadow" />
//       </section>

//     </div>
//   );
// };

// export default Work;
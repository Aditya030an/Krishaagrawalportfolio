// import React from 'react'
// import profile from "./photos/profile.png"

// const Resume = () => {
//   return (
//     <div className="w-full min-h-screen bg-[#faf7f2] flex flex-col justify-center items-center">

//       {/* Top decorative line */}
//       <div className="border-t border-dotted border-gray-400 w-full mx-10 md:mx-24 mb-10"></div>

//       {/* Image */}
//       <div className="w-full flex justify-center">
//         <img
//           src={profile}
//           alt="profile"
//           className="max-w-full max-h-[80vh] object-contain transition duration-700 hover:scale-105"
//         />
//       </div>

//       {/* Bottom decorative line */}
//       <div className="border-t border-dotted border-gray-400 w-full mx-10 md:mx-24 mt-10"></div>
//             {/* Footer */}
//             <div className="w-full py-12 flex justify-center items-center bg-white transition duration-300 hover:bg-[#f3d87d]">

//   <div className="flex flex-col items-center text-center">

//     <h1 className="text-4xl font-pinyon text-gray-800 mb-4">
//       Krisha Agrawal
//     </h1>

//     <p className="text-lg text-gray-600 mb-4">
//       Email:{" "}
//       <a
//         href="mailto:Krishaagrawal850@gmail.com"
//         className="text-[#1E40AF] hover:underline"
//       >
//         Krishaagrawal850@gmail.com
//       </a>
//     </p>

//     <p className="text-lg text-gray-600 mb-4">
//       LinkedIn:{" "}
//       <a
//         href="https://in.linkedin.com/in/krisha-agrawal-a89504225"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-[#1E40AF] hover:underline"
//       >
//         krisha-agrawal
//       </a>
//     </p>

//   </div>

// </div>

//     </div>
//   )
// }

// export default Resume



import React from "react";
import profile from "./photos/fixed.png";

const Resume = () => {
  return (
    <div className="w-full min-h-screen bg-[#faf7f2] flex justify-center items-center">

      <div className="w-full h-screen overflow-y-auto">
        
        <img
          src={profile}
          alt="profile"
          className="w-full h-auto object-cover"
        />

      </div>

    </div>
  );
};

export default Resume;

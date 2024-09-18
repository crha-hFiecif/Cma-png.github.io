// // import React from 'react';

// // interface LinkedInButtonProps {
// //   href: string;
// // }

// // export const LinkedInButton: React.FC<LinkedInButtonProps> = ({ href }) => {
// //   return (
// //     <a
// //       href={href}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="group flex items-center justify-center relative w-18 h-12 bg-stone-50 text-black border-none rounded-md text-xl cursor-pointer z-10 overflow-hidden"
// //     >
// //       <span className="svgContainer">
// //         <svg
// //           viewBox="0 0 24 24"
// //           height="24"
// //           width="24"
// //           xmlns="http://www.w3.org/2000/svg"
// //           className="w-6 h-6 fill-black-50"
// //         >
// //           <path
// //             d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
// //           />
// //         </svg>
// //       </span>
// // </a>
// //   );
// // };


// import React from 'react';

// interface LinkedInButtonProps {
//   href: string;
// }

// export const LinkedInButton: React.FC<LinkedInButtonProps> = ({ href }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="group flex items-center justify-center relative w-18 h-12 bg-stone-50 text-black border-none rounded-md text-xl cursor-pointer z-10 overflow-hidden hover:bg-lime-500"
//     >
//       <span className="svgContainer">
//         <svg
//           viewBox="0 0 24 24"
//           height="24"
//           width="24"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6 fill-current text-black group-hover:text-lime-100/5"
//         >
//           <path
//             d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
//           />
//         </svg>
//       </span>
//     </a>
//   );
// };

// import React from 'react';

// interface LinkedInButtonProps {
//   href: string;
// }

// export function LinkedInButton({ href }: { href: string }) {
//   return (
//     <div className="group flex items-center">
//       <a href={href} target="_blank" rel="noopener noreferrer">
//         <button className="button-65 hover:text-lime-500" role="button">
//         <i className="fab fa-linkedin fa-2x"></i> 
//         </button>
//       </a>
//       <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lime-500">
//         LinkedIn
//       </span>
//     </div>
//   );
// }



// import React from 'react';

// interface LinkedInButtonProps {
//   href: string;
// }

// export function LinkedInButton({ href }: { href: string }) {
//   return (
//     <div className="group flex items-center">
//       <a href={href} target="_blank" rel="noopener noreferrer">
//         <button className="button-65 hover:text-lime-500" role="button">
//         <i className="fab fa-linkedin fa-2x"></i> 
//         </button>
//       </a>
//       <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lime-500">
//         LinkedIn
//       </span>
//     </div>
//   );
// }


import React from 'react';

interface LinkedInButtonProps {
  href: string;
}

export function LinkedInButton({ href }: LinkedInButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center group button-65 hover:text-lime-500"
    >
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.89 0 54.12A53.6 53.6 0 0153.79 0c29.88 0 53.79 24.18 53.79 54.12 0 29.77-23.91 54.1-53.79 54.1zM447.8 448h-92.6V302.4c0-34.7-12.51-58.4-43.73-58.4-23.86 0-38.08 16.03-44.35 31.47-2.29 5.61-2.86 13.41-2.86 21.25V448h-92.68s1.24-257.08 0-283.1h92.68v40.1c-.19.32-.46.66-.65.97h.65v-.97c12.32-19 34.29-46.14 83.36-46.14 60.92 0 106.51 39.74 106.51 125.16V448z"
          />
        </svg>
      </span>
      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lime-500">
        LinkedIn
      </span>
    </a>
  );
}
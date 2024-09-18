// // import React from 'react';

// // interface MediumButtonProps {
// //   href: string;
// // }

// // export const MediumButton: React.FC<MediumButtonProps> = ({ href }) => {
// //   return (
// //     <a
// //       href={href}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="group flex items-center justify-center relative w-18 h-12 bg-stone-50 text-black border-none rounded-md text-xl cursor-pointer z-10 overflow-hidden"
// //     >
// //       <svg
// //         className="w-6 h-6 fill-black-50"
// //         viewBox="0 0 24 24"
// //         xmlns="http://www.w3.org/2000/svg"
// //       >
// //         <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
// //       </svg>
// //  </a>
// //   );
// // };


// // import React from 'react';

// // export function MediumButton({ href }: { href: string }) {
// //   return (
// //     <div className="group flex items-center">
// //       <a href={href} target="_blank" rel="noopener noreferrer">
// //         <button className="button-89 hover:text-lime-500" role="button">
// //           <i className="fa fa-medium fa-2x"></i>
// //         </button>
// //       </a>
// //     </div>
// //   );
// // }


// import React from 'react';

// // Define the interface for the props
// interface MediumButtonProps {
//   href: string;
// }

// // Define the MediumButton component
// export function MediumButton({ href }: MediumButtonProps) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="button-89 hover:text-lime-500"
//     >
//       <i className="fa fa-medium fa-2x"></i>
//     </a>
//   );
// }

// import React from 'react';

// interface MediumButtonProps {
//   href: string;
// }

// export const MediumButton: React.FC<MediumButtonProps> = ({ href }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="group flex items-center justify-center relative w-18 h-12 bg-stone-50 text-black border-none rounded-md text-xl cursor-pointer z-10 overflow-hidden"
//     >
//       <svg
//         className="w-6 h-6 fill-black-50"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
//       </svg>
//       <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg text-lime-500">
//         Medium
//       </span>
//     </a>
//   );
// };

import React from 'react';

interface MediumButtonProps {
  href: string;
}

export const MediumButton: React.FC<MediumButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center group button-89 hover:text-lime-500"
    >
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      </span>
      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lime-500">
        Medium
      </span>
    </a>
  );
};
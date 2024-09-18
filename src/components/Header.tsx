// "use client";

// import clsx from "clsx";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "On Going Projects", href: "/projects" },
// ];

// export function Header() {
//   const pathname = usePathname();
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [showNav, setShowNav] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       if (prevScrollPos > currentScrollPos) {
//         setShowNav(true);
//       } else {
//         setShowNav(false);
//       }
//       setPrevScrollPos(currentScrollPos);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <nav
//       className={clsx(
//         "fixed left-0 right-0 z-50 flex justify-center transition-all duration-500",
//         {
//           "top-4": showNav,
//           "-top-16": !showNav,
//         }
//       )}
//     >
//       <ul className="flex px-5 rounded-full bg-zinc py-2 text-sm font-medium text-black2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
//         <div className="flex space-x-4">
//           {navigation.map((item, index) => (
//             <li
//               key={index}
//               className={clsx("transition-colors hover:text-pink-500", {
//                 "text-black": pathname === item.href,
//               })}
//             >
//               <Link key={item.name} href={item.href}>
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </div>
//       </ul>
//     </nav>
//   );
// }

// ----------------
// "use client";

// import clsx from "clsx";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "On Going Projects", href: "/projects" },
// ];

// export function Header() {
//   const pathname = usePathname();
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [showNav, setShowNav] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       if (prevScrollPos > currentScrollPos) {
//         setShowNav(true);
//       } else {
//         setShowNav(false);
//       }
//       setPrevScrollPos(currentScrollPos);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <nav
//       className={clsx(
//         "fixed left-0 right-0 z-50 flex justify-center transition-all duration-500",
//         {
//           "top-4": showNav,
//           "-top-16": !showNav,
//         }
//       )}
//     >
//       <ul 
//       className="flex px-5 py-3 rounded-full bg-zinc-50 text-sm font-medium text-black shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5"
//       style={{ width: '900px' }}
//       >
//         <div className="flex space-x-6">
//           {navigation.map((item, index) => (
//             <li
//               key={index}
//               className={clsx("transition-colors hover:text-pink-500", {
//                 "text-black": pathname === item.href,
//               })}
//             >
//               <Link key={item.name} href={item.href}>
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </div>
//       </ul>
//     </nav>
//   );
// }

// -----

"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SocialMediaButtons } from "./SocialMediaButtons";

const navigation = [
  { name: "Home", href: "/" },
  { name: "On Going Projects", href: "/projects" },
];

export function Header() {
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={clsx(
        "fixed z-50 flex justify-between items-center px-3 py-2 rounded-full bg-zinc-50 text-sm font-medium text-black shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5",
        {
          "top-4": showNav,
          "-top-16": !showNav,
        }
      )}
      style={{ width: "525px", left: "50%", transform: "translateX(-50%)" }} // Fixed width and centered
    >
      <ul className="flex space-x-6">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={clsx("transition-colors hover:text-pink-500", {
              "text-black": pathname === item.href,
            })}
          >
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <SocialMediaButtons />
    </nav>
  );
}
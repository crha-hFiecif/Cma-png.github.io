"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SocialMediaButtons } from "./SocialMediaButtons";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
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
        "fixed z-50 flex justify-between items-center px-6 py-3 rounded-full bg-background-light/80 backdrop-blur-sm border border-primary/20 text-sm font-medium text-background-paper shadow-lg shadow-primary/5",
        {
          "top-4 translate-y-0": showNav,
          "-top-24": !showNav,
        }
      )}
      style={{ width: "600px", left: "50%", transform: "translateX(-50%)" }}
    >
      <ul className="flex space-x-8">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={clsx("transition-colors hover:text-primary-light", {
              "text-primary": pathname === item.href,
              "text-background-paper": pathname !== item.href,
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
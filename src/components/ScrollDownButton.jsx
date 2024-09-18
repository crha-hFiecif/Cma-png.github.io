"use client"; // This line tells Next.js that this is a Client Component

import { IconArrowDown } from "@tabler/icons-react";

export const ScrollDownButton = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="animate-bounce cursor-pointer"
      onClick={scrollToProjects}
    >
      <IconArrowDown className="h-6 w-6 text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text" />
    </div>
  );
};
import React from "react";

export function Button({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`
        inline-flex items-center px-4 py-2 
        bg-primary text-background-paper
        hover:bg-primary-light
        active:bg-primary-dark
        transition-colors duration-300
        rounded-md font-medium
        shadow-lg shadow-primary/20
        ${className}
      `}
    >
      {children}
    </button>
  );
}
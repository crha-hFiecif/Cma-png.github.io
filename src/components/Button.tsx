import React from "react";

export function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#fcd34d,-0.5rem_-0.5rem_#bef264] transition"
    >
      {children}
    </button>
  );
}
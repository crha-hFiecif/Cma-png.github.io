import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "HL-BeChal - Portfolio",
  description: "BeChal Sim Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">
        <link rel="icon" href="/images/right.png" />
        <Header />
        {/* Add this image */}
        <div className="absolute top-0 left-0 p-4">
          <img src="/images/right.png" alt="Logo" className="w-12 h-12" />
        </div>
        <main className="container min-h-screen px-4 sm:px-10 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
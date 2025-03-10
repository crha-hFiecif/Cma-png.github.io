import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "HL-BeChal - Portfolio",
  description: "BeChal Sim - AI & Machine Learning Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-background-paper">
        <link rel="icon" href="/images/icon.png" />
        <Header />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light via-background to-background -z-10" />
        <main className="container min-h-screen px-4 sm:px-10 py-24 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
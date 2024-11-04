import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import React from "react";

export default function PageLayout({ children }) {
  return (
    <div
      className="layout relative mx-auto flex justify-center items-center flex-col py-4 w-full bg-cover
    bg-gradient-to-r from-neutral-300 to-teal-200
     "
    >
      <Hero />
      {children}
      <Footer />
    </div>
  );
}

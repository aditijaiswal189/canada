import Footer from "@/components/ui/footer";
import HeroDefault from "@/components/ui/hero-all";
import React from "react";

export default function AllPageLayout({ children }) {
  return (
    <div
      className="layout relative mx-auto flex justify-center items-center flex-col py-4 w-full bg-cover
    bg-gradient-to-r from-neutral-300 to-teal-200
     "
    >
      <HeroDefault />
      {children}
      <Footer />
    </div>
  );
}

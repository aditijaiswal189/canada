import Footer from "@/components/ui/footer";
import HeroDefault from "@/components/ui/hero-all";
import React from "react";

export default function AllPageLayout({ children }) {
  return (
    <>
      <HeroDefault />
      {children}
      <Footer />
    </>
  );
}

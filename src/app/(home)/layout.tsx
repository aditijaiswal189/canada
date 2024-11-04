import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import React from "react";

export default function PageLayout({ children }) {
  return (
    <>
      <Hero />
      {children}
      <Footer />
    </>
  );
}

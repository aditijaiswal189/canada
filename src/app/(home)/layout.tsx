import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
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

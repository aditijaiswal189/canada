import HeroDefault from "@/components/ui/hero-all";
import React, { ReactNode } from "react";
import HeroWithNav from "../revamp/revamp-components/hero-with-nav";
import { Footer } from "../revamp/revamp-components/footer";

interface PageLayoutProps {
  children: ReactNode;
}
export default function AllPageLayout({ children }: PageLayoutProps) {
  return (
    <div
      className="layout relative flex justify-center items-center flex-col py-0 w-full bg-cover
     "
    >
      <HeroWithNav />
      <div className="pt-28">{children}</div>
      <Footer />
    </div>
  );
}

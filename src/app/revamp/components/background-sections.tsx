import { cn } from "@/lib/utils";
import React from "react";

export default function BackgroundWithImage({
  image = "/revamp/bg-3.jpg",
  children,
  className = "",
}) {
  return (
    <div className="min-h-[90vh] w-full relative bg-black">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className={cn("relative z-10 px-8 py-14", className)}>
        {children}
      </div>
    </div>
  );
}

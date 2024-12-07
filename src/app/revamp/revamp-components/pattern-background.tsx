import React from "react";

export default function PatternBackground({ children }) {
  return (
    <div
      className="w-full "
      style={{
        backgroundImage: "url('/revamp/pattern-3.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="bg-[#FDF2F5] bg-opacity-60 py-14 px-6">{children}</div>
    </div>
  );
}

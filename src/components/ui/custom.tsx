"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { ButtonHTMLAttributes, ReactNode } from "react";
// import { useNavigate } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon: ReactNode | string;
}

export const Button = ({
  children,
  icon,
  className,
  ...props
}: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      className={cn(
        "relative bg-highlight text-white flex justify-center group/modal-btn",
        className
      )}
      {...props}
      onClick={() => router.push("/book-appointment")}
    >
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
        {children}
      </span>
      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
        {typeof icon === "string" ? <span className={icon} /> : icon}
      </div>
    </button>
  );
};
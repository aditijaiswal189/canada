import React from "react";
import { cn } from "./utils";

export default function Glass({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex-col w-full  rounded-sm mx-auto py-8 px-0 flex",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

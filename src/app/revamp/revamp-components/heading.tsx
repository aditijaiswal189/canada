import { cn } from "@/lib/utils";
import React from "react";
import IconBackground from "./icon-background";

export function Heading() {
  return <div>H</div>;
}

export function Subtitle({
  children,
  position = "left",
  className = "",
  highliterClassName = "",
}) {
  const positionClass = {
    left: "left-0",
    center: "left-1/2 transform -translate-x-1/2",
    right: "right-0",
  }[position];

  return (
    <div className="relative flex flex-col gap-5">
      <div
        className={cn(
          "absolute w-8 h-1 rounded-lg bg-green-600",
          positionClass,
          highliterClassName
        )}
      ></div>
      <h6
        className={cn("mt-4 text-green-600  font-semibold text-xs", className)}
      >
        {children}
      </h6>
    </div>
  );
}

export function Title({ children, className = "" }) {
  return (
    <h2
      className={cn(
        "relative w-[70%] mx-auto leading-[50px] text-black text-[50px] font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Description({ children, className = "" }) {
  return (
    <p className={cn("text-[#727272] leading-[30px] font-normal", className)}>
      {children}
    </p>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={cn("text-2xl leading-[32px] font-bold", className)}>
      {children}
    </h3>
  );
}

export function List({ children, className = "" }) {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
}

export function ListItem({
  children,
  className = "",
  icon = "simple-icons:aircanada",
  descriptionClassName = "",
}) {
  return (
    <div className={cn("flex gap-2", className)}>
      <IconBackground icon={icon} />
      <Description className={descriptionClassName}>{children}</Description>
    </div>
  );
}

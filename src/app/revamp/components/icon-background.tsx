import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function IconBackground({
  icon,
  className = "",
  iconClassName = "",
}) {
  return (
    <div className={cn("p-2 rounded-lg bg-green-100 w-max", className)}>
      <Icon icon={icon} className={cn("text-green-600", iconClassName)} />
    </div>
  );
}

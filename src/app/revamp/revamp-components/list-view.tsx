import React from "react";

export default function ListView({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex justify-start items-start gap-2 relative">
      <div className=" bg-green-600 w-2 h-2 rounded-full mt-2 relative justify-center items-center">
        <div className="h-[26px] w-[1px] bg-green-400 mt-[8px] ml-[3px] relative"></div>
      </div>
      <li className="flex flex-col gap-2">
        {title}
        <span className="ml-1 text-gray-600">{description}</span>
      </li>
    </div>
  );
}

import Link from "next/link";
import { CardTitle, Description } from "./heading";
import IconBackground from "./icon-background";
import { use } from "react";
import { getSearchedIcon } from "@/components/ui/get-icons";

export const CardItem = ({
  title,
  description,
  link = "/",
}: {
  title: string;
  description: string;
  link?: string;
}) => {
  const icon = use(getSearchedIcon(title));

  const truncateTextHeading = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <div className="space-y-3 flex justify-start items-start flex-col">
      <IconBackground icon={icon} className="rounded-full text-4xl" />

      <CardTitle className="text-xl font-semibold  capitalize dark:text-white">
        {title}
      </CardTitle>

      {/* Description */}
      <Description className=" text-left ">{description}</Description>

      {/* Read More Link */}
      {link !== "/" && (
        <Link
          href={link}
          className="inline-flex items-center -mx-1 text-sm text-highlight capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <span className="mx-1">Read more</span>
        </Link>
      )}
    </div>
  );
};

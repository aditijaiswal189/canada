import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { use } from "react";
import { getSearchedIcon } from "@/components/ui/get-icons";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function HighlightCards({
  title,
  config,
  className,
  mainClassName,
  icon = false,
}: {
  className?: string;
  mainClassName?: string;
  icon?: boolean;
  title: string;
  config: {
    title: string;
    subtitle: string;
    description: string;
    link: string;
  }[];
}) {
  return (
    <div className=" bg-white">
      <div className={cn("px-6 py-12", mainClassName)}>
        <div className="">
          {title && (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
          )}
          <div
            className={cn("grid grid-cols-1 lg:grid-cols-4 gap-6", className)}
          >
            {config.map((item, index) => {
              const iconName = icon && use(getSearchedIcon(item.title));
              return (
                <>
                  <Card
                    key={index}
                    className={cn(
                      "p-6 transition-colors",
                      index === 0
                        ? "bg-emerald-200 hover:bg-emerald-300"
                        : index === 1
                        ? "bg-black hover:bg-black/90 text-white"
                        : index === 2
                        ? "bg-violet-200 hover:bg-violet-300"
                        : index === 3
                        ? "bg-yellow-200 hover:bg-yellow-300"
                        : index === 4
                        ? "bg-red-200 hover:bg-red-300"
                        : index === 5
                        ? "bg-blue-200 hover:bg-blue-300"
                        : index === 6
                        ? "bg-pink-200 hover:bg-pink-300"
                        : index === 7
                        ? "bg-gray-200 hover:bg-gray-300"
                        : index === 8
                        ? "bg-indigo-200 hover:bg-indigo-300"
                        : index === 9
                        ? "bg-teal-200 hover:bg-teal-300"
                        : "bg-white hover:bg-gray-100" // Default case for other indices
                    )}
                  >
                    {item.subtitle && (
                      <div className="uppercase text-sm mb-4">
                        {item.subtitle}
                      </div>
                    )}
                    <div className="flex gap-2 items-center">
                      {icon && (
                        <Icon icon={iconName} className="-mt-2 text-xl" />
                      )}

                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    </div>
                    <p
                      className={cn(
                        "text-sm text-gray-600 mb-8",
                        index == 1 && "text-white"
                      )}
                    >
                      {item.description}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="flex items-center justify-between"
                      >
                        <div></div>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    )}
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

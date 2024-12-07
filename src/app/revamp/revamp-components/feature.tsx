import { cn } from "@/lib/utils";
import { CardTitle } from "./heading";
import IconBackground from "./icon-background";

export const Feature = ({
  title,
  description,
  icon,
  index,
  className = "",
}: {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  index: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && " dark:border-neutral-800",
        index < 4 && " dark:border-neutral-800",
        className
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-green-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      <div
        className={cn(
          "text-lg font-bold  mb-2 relative z-10  px-4  overflow-hidden"
        )}
      >
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-highlight dark:bg-highlight group-hover/feature:bg-green-600 transition-all duration-200 origin-center" />
        <div className="flex gap-1">
          {/* <IconBackground icon={icon} /> */}
          <CardTitle className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 text-left text-lg">
            {title}
          </CardTitle>
        </div>
        {description && description}
      </div>
    </div>
  );
};

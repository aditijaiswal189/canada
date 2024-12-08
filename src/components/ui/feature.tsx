import Glass from "@/lib/helpers";
import Container from "./container";
import { cn } from "@/lib/utils";

export function FeatureSection({
  title,
  subtitle,
  description,
  children,
  childClass,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  childClass?: string;
}) {
  return (
    <>
      <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl">
        <div>
          <p className="inline-block z-10 bg-green-600 px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
            {subtitle}
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto z-10 relative">
          {title}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">{description}</p>
      </div>
      <div className={cn("grid gap-8 row-gap-10 lg:grid-cols-2", childClass)}>
        {children}
      </div>
    </>
  );
}
interface FeatureProps {
  title?: string;

  children?: React.ReactNode;
  description?: string;
}

export const FeatureSection2 = ({
  children,
  title,
  description,
}: FeatureProps) => {
  return (
    <div className="container  py-10 ">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        {title}
      </h1>
      <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
        {description}
      </p>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 px-4">
        {children}
      </div>
    </div>
  );
};

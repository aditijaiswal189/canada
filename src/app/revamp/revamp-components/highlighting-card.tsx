import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
export default function HighlightCards({
  title,
  config,
}: {
  title: string;
  config: {
    title: string;
    subtitle: string;
    description: string;
    link: string;
  }[];
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-12">
        <div className="mt-20">
          {title && (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {config.map((item, index) => (
              <>
                <Card
                  className={cn(
                    "p-6  transition-colors",
                    index === 0
                      ? "bg-emerald-200 hover:bg-emerald-300"
                      : index === 1
                      ? "bg-black hover:bg-black/90 text-white"
                      : index === 2
                      ? "bg-violet-200 hover:bg-violet-300"
                      : "bg-yellow-200 hover:bg-yellow-300"
                  )}
                >
                  {item.subtitle && (
                    <div className="uppercase text-sm mb-4">
                      {item.subtitle}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

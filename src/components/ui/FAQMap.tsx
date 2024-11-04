import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ReactNode } from "react";

export const FAQ = ({
  title,
  description,
  id,
}: {
  title?: string;
  description?: string | ReactNode;
  id?: number;
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-2 md:px-0 flex flex-col gap-2"
    >
      <AccordionItem value="item-1" className="w-full ">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className="">
          <div className="flex flex-col gap-2 my-2">{description}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

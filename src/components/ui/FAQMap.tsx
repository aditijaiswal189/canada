import { Description } from "@/app/revamp/revamp-components/heading";
import { Timeline } from "@/app/revamp/revamp-components/timeline";
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
      <AccordionItem value="item-1" className="w-full my-2">
        <AccordionTrigger className="bg-green-600 w-full text-left text-white rounded-none  data-[state=open]:rounded-none">
          {title}
        </AccordionTrigger>
        <AccordionContent className="border px-2">
          <Description className="flex text-sm flex-col gap-2 my-2">
            {description}
          </Description>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

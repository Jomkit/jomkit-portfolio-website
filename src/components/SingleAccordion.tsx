import type { ReactNode } from "react";
import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  children: ReactNode;
  title: string;
  expanded?: boolean;
}

export function SingleAccordion({ children, title, expanded=false }: Props) {
  return (
    <BaseAccordion type="single" collapsible defaultValue={expanded ? "item" : undefined} className="w-full">
      <AccordionItem value="item">
        <AccordionTrigger className="text-xl">{title}</AccordionTrigger>
        <AccordionContent className="text-lg">{children}</AccordionContent>
      </AccordionItem>
    </BaseAccordion>
  );
}

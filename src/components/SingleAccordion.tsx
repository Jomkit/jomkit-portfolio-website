import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type React from "react";

interface Props {
    children: any,
    title: string
}

export function SingleAccordion({ children, title }: Props) {
  return (
    <BaseAccordion type="single" collapsible className="w-full">
        
        <AccordionItem value={`item`}>
        <AccordionTrigger className="text-xl">{title}</AccordionTrigger>
        <AccordionContent className="text-lg">{children}</AccordionContent>
        </AccordionItem>
        
    </BaseAccordion>
  );
}
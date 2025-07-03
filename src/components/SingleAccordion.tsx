import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
    children: any,
    title: string,
    expanded?: boolean
}

const screenWidth = window.innerWidth;

export function SingleAccordion({ children, title, expanded=false }: Props) {
  return (
    <BaseAccordion type="single" collapsible defaultValue={expanded && (screenWidth > 1024) ? `item` : ""} className="w-full">
        <AccordionItem value={`item`}>
        <AccordionTrigger className="text-xl">{title}</AccordionTrigger>
        <AccordionContent className="text-lg">{children}</AccordionContent>
        </AccordionItem>
        
    </BaseAccordion>
  );
}
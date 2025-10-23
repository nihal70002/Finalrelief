import React from "react";

export function Accordion({ children }) {
  return <div className="space-y-2">{children}</div>;
}

export function AccordionItem({ children }) {
  return <div>{children}</div>;
}

export function AccordionTrigger({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left font-medium flex items-center justify-between"
    >
      {children}
    </button>
  );
}

export function AccordionContent({ children, isOpen }) {
  return (
    <div
      className={`transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-96 mt-2" : "max-h-0"
      }`}
    >
      {children}
    </div>
  );
}

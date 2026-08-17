import React, { useState } from 'react';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div
      className={clsx(
        'divide-y divide-[var(--nexus-border-default)] border-y border-[var(--nexus-border-default)]',
        className
      )}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="py-2">
            <button
              type="button"
              id={`accordion-btn-${item.id}`}
              aria-controls={`accordion-panel-${item.id}`}
              aria-expanded={isOpen}
              disabled={item.disabled}
              onClick={() => toggleItem(item.id)}
              className="nexus-transition-fast flex w-full items-center justify-between rounded-[var(--nexus-radius-sm)] py-3 text-left font-medium text-[var(--nexus-text-primary)] hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span className="text-sm font-semibold">{item.title}</span>
              <ChevronDown
                className={clsx(
                  'nexus-transition-normal h-4 w-4 shrink-0 transform text-[var(--nexus-text-muted)]',
                  isOpen && 'rotate-180 text-[var(--nexus-text-primary)]'
                )}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={`accordion-panel-${item.id}`}
                role="region"
                aria-labelledby={`accordion-btn-${item.id}`}
                className="nexus-animate-fade-in pt-1 pb-4 text-sm leading-relaxed text-[var(--nexus-text-secondary)]"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = 'Accordion';

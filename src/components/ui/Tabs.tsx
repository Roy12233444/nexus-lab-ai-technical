import React, { useState } from 'react';
import clsx from 'clsx';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  activeTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'underline' | 'pills';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  activeTab,
  onChange,
  variant = 'underline',
  className,
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    activeTab || defaultTab || (items[0]?.id ?? '')
  );

  const currentTabId = activeTab !== undefined ? activeTab : selectedId;

  const handleSelect = (id: string) => {
    if (activeTab === undefined) {
      setSelectedId(id);
    }
    onChange?.(id);
  };

  const activeItem = items.find((item) => item.id === currentTabId) || items[0];

  return (
    <div className={clsx('w-full', className)}>
      {/* Tab List */}
      <div
        role="tablist"
        className={clsx(
          'no-scrollbar flex items-center gap-1 overflow-x-auto border-b border-[var(--nexus-border-default)]',
          variant === 'pills' &&
            'rounded-[var(--nexus-radius-lg)] border-b-0 bg-[var(--nexus-bg-tertiary)] p-1'
        )}
      >
        {items.map((tab) => {
          const isSelected = tab.id === currentTabId;

          if (variant === 'pills') {
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls={`panel-${tab.id}`}
                aria-selected={isSelected}
                disabled={tab.disabled}
                onClick={() => handleSelect(tab.id)}
                className={clsx(
                  'nexus-transition-fast flex cursor-pointer items-center gap-2 rounded-[var(--nexus-radius-md)] px-3.5 py-1.5 text-xs font-medium select-none focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40',
                  isSelected
                    ? 'bg-[var(--nexus-bg-primary)] font-semibold text-[var(--nexus-text-primary)] shadow-[var(--nexus-shadow-subtle)]'
                    : 'text-[var(--nexus-text-muted)] hover:text-[var(--nexus-text-primary)]'
                )}
              >
                {tab.icon && <span className="inline-flex shrink-0">{tab.icon}</span>}
                <span>{tab.label}</span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
              aria-selected={isSelected}
              disabled={tab.disabled}
              onClick={() => handleSelect(tab.id)}
              className={clsx(
                'nexus-transition-fast -mb-[1px] flex cursor-pointer items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium select-none focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40',
                isSelected
                  ? 'border-[var(--nexus-text-primary)] font-semibold text-[var(--nexus-text-primary)]'
                  : 'border-transparent text-[var(--nexus-text-muted)] hover:border-[var(--nexus-border-strong)] hover:text-[var(--nexus-text-secondary)]'
              )}
            >
              {tab.icon && <span className="inline-flex shrink-0">{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      {activeItem && (
        <div
          role="tabpanel"
          id={`panel-${activeItem.id}`}
          aria-labelledby={`tab-${activeItem.id}`}
          className="nexus-animate-fade-in pt-4"
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
};

Tabs.displayName = 'Tabs';

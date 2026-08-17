import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'wide';
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  size = 'md',
  children,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    wide: 'max-w-4xl',
  };

  return (
    <div
      className="fixed inset-0 z-[var(--nexus-z-modal)] flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-description' : undefined}
    >
      {/* Backdrop */}
      <div
        className="nexus-transition-fast animate-fade-in fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Surface */}
      <div
        ref={modalRef}
        className={clsx(
          'nexus-animate-fade-up relative z-10 w-full rounded-[var(--nexus-radius-xl)] border border-[var(--nexus-border-default)] bg-[var(--nexus-bg-card)] p-6 shadow-[var(--nexus-shadow-modal)]',
          sizeStyles[size],
          className
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="nexus-transition-fast absolute top-4 right-4 rounded-[var(--nexus-radius-sm)] p-1.5 text-[var(--nexus-text-muted)] hover:bg-[var(--nexus-bg-tertiary)] hover:text-[var(--nexus-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        {(title || description) && (
          <div className="mb-4 pr-6">
            {title && (
              <h2 id="modal-title" className="nexus-h4 font-semibold">
                {title}
              </h2>
            )}
            {description && (
              <p
                id="modal-description"
                className="nexus-body-sm mt-1 text-[var(--nexus-text-muted)]"
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div className="nexus-body text-[var(--nexus-text-secondary)]">{children}</div>
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

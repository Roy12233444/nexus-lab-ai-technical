import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { Divider } from '@/components/ui/Divider';
import { Loading } from '@/components/ui/Loading';
import { Modal } from '@/components/ui/Modal';
import { Tabs } from '@/components/ui/Tabs';
import { Accordion } from '@/components/ui/Accordion';
import { Tooltip } from '@/components/ui/Tooltip';

describe('Core UI Primitives', () => {
  describe('Button', () => {
    it('renders label and handles click', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Explore Research</Button>);
      const btn = screen.getByRole('button', { name: /explore research/i });
      expect(btn).toBeDefined();
      fireEvent.click(btn);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('disables button when disabled or loading', () => {
      render(<Button disabled>Disabled Button</Button>);
      const btn = screen.getByRole('button', { name: /disabled button/i });
      expect(btn.hasAttribute('disabled')).toBe(true);
    });

    it('shows loading indicator when isLoading is true', () => {
      render(<Button isLoading>Loading Button</Button>);
      expect(screen.getByRole('status', { name: /loading/i })).toBeDefined();
    });
  });

  describe('Card', () => {
    it('renders card with title and content', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>System Card</CardTitle>
          </CardHeader>
          <CardContent>Card Content Body</CardContent>
        </Card>
      );
      expect(screen.getByText('System Card')).toBeDefined();
      expect(screen.getByText('Card Content Body')).toBeDefined();
    });
  });

  describe('Badge', () => {
    it('renders evidence state variants correctly', () => {
      render(<Badge variant="verified">Verified</Badge>);
      expect(screen.getByText('Verified')).toBeDefined();
    });
  });

  describe('StatusIndicator', () => {
    it('renders status and label', () => {
      render(<StatusIndicator status="active" label="System Active" />);
      expect(screen.getByRole('status', { name: /system active/i })).toBeDefined();
      expect(screen.getByText('System Active')).toBeDefined();
    });
  });

  describe('Divider', () => {
    it('renders horizontal and labeled separators', () => {
      render(<Divider label="OR" />);
      expect(screen.getByRole('separator')).toBeDefined();
      expect(screen.getByText('OR')).toBeDefined();
    });
  });

  describe('Loading', () => {
    it('renders spinner with accessible label', () => {
      render(<Loading label="Fetching Evidence" />);
      expect(screen.getByRole('status', { name: /fetching evidence/i })).toBeDefined();
    });
  });

  describe('Modal', () => {
    it('renders dialog when isOpen is true', () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} onClose={handleClose} title="Technical Modal">
          <p>Modal Body Content</p>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toBeDefined();
      expect(screen.getByText('Technical Modal')).toBeDefined();
      expect(screen.getByText('Modal Body Content')).toBeDefined();
    });

    it('triggers onClose when close button is clicked', () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} onClose={handleClose} title="Closeable Modal">
          <p>Content</p>
        </Modal>
      );
      const closeBtn = screen.getByRole('button', { name: /close dialog/i });
      fireEvent.click(closeBtn);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Tabs', () => {
    it('renders tabs and switches active panel', () => {
      const tabItems = [
        { id: 'tab1', label: 'Architecture', content: <div>Architecture Panel</div> },
        { id: 'tab2', label: 'Evidence', content: <div>Evidence Panel</div> },
      ];

      render(<Tabs items={tabItems} defaultTab="tab1" />);
      expect(screen.getByText('Architecture Panel')).toBeDefined();

      const tab2Btn = screen.getByRole('tab', { name: /evidence/i });
      fireEvent.click(tab2Btn);
      expect(screen.getByText('Evidence Panel')).toBeDefined();
    });
  });

  describe('Accordion', () => {
    it('toggles accordion panel on trigger click', () => {
      const accordionItems = [
        { id: 'acc1', title: 'Specifications', content: 'Detailed specs payload' },
      ];

      render(<Accordion items={accordionItems} />);
      const btn = screen.getByRole('button', { name: /specifications/i });
      expect(btn.getAttribute('aria-expanded')).toBe('false');

      fireEvent.click(btn);
      expect(btn.getAttribute('aria-expanded')).toBe('true');
      expect(screen.getByText('Detailed specs payload')).toBeDefined();
    });
  });

  describe('Tooltip', () => {
    it('renders child element and shows tooltip on mouse hover', () => {
      render(
        <Tooltip content="Tooltip Context">
          <button>Hover Target</button>
        </Tooltip>
      );

      const target = screen.getByText('Hover Target');
      fireEvent.mouseEnter(target);
      expect(screen.getByRole('tooltip')).toBeDefined();
      expect(screen.getByText('Tooltip Context')).toBeDefined();
    });
  });
});

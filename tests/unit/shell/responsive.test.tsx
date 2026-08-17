import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

describe('Responsive Shell System (Phase 03D)', () => {
  describe('Full Shell Assembly', () => {
    it('renders Header, PageShell, Section, and Footer without layout conflict', () => {
      render(
        <div className="flex min-h-screen flex-col">
          <Header currentPath="/" />
          <PageShell
            title="Systems Architecture"
            description="High-performance technical interface."
            eyebrow="Nexus LAB AI"
            breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Architecture' }]}
            width="content"
          >
            <Section title="Subsystem Overview" spacing="md" width="content">
              <p>Responsive Content Payload</p>
            </Section>
          </PageShell>
          <Footer />
        </div>
      );

      expect(screen.getAllByRole('banner').length).toBeGreaterThan(0);
      expect(screen.getByRole('main')).toBeDefined();
      expect(screen.getByRole('contentinfo')).toBeDefined();
      expect(screen.getByText('Systems Architecture')).toBeDefined();
      expect(screen.getByText('Subsystem Overview')).toBeDefined();
      expect(screen.getByText('Responsive Content Payload')).toBeDefined();
    });
  });

  describe('Breadcrumbs Mobile Safety', () => {
    it('renders breadcrumbs in wrap-safe semantic list', () => {
      render(
        <Breadcrumbs
          items={[
            { label: 'Overview', href: '/' },
            { label: 'Research', href: '/research' },
            { label: 'Autonomous Programs', href: '/research/programs' },
            { label: 'COSMOS Program' },
          ]}
        />
      );
      const list = screen.getByRole('list');
      expect(list.className).toContain('flex-wrap');
    });
  });
});

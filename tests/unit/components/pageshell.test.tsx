import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

describe('PageShell & Layout Engine (Phase 03C)', () => {
  describe('PageShell Landmark & Skip Link', () => {
    it('renders main landmark with id="main-content"', () => {
      render(
        <PageShell title="Research Page">
          <p>Page Content</p>
        </PageShell>
      );
      const main = screen.getByRole('main');
      expect(main).toBeDefined();
      expect(main.getAttribute('id')).toBe('main-content');
    });

    it('renders skip to main content link', () => {
      render(
        <PageShell title="Research Page">
          <p>Page Content</p>
        </PageShell>
      );
      const skipLink = screen.getByText(/skip to main content/i);
      expect(skipLink).toBeDefined();
      expect(skipLink.getAttribute('href')).toBe('#main-content');
    });
  });

  describe('Page Header Composition', () => {
    it('renders title, description, and eyebrow in page header', () => {
      render(
        <PageShell
          title="Autonomous Systems"
          description="Investigating durable intelligent systems."
          eyebrow="Research Division"
        >
          <div>Body</div>
        </PageShell>
      );
      expect(screen.getByText('Autonomous Systems')).toBeDefined();
      expect(screen.getByText('Investigating durable intelligent systems.')).toBeDefined();
      expect(screen.getByText('Research Division')).toBeDefined();
    });

    it('renders breadcrumbs when provided', () => {
      const breadcrumbItems = [
        { label: 'Overview', href: '/' },
        { label: 'Research', href: '/research' },
        { label: 'COSMOS' },
      ];

      render(
        <PageShell title="COSMOS Program" breadcrumbs={breadcrumbItems}>
          <div>Body</div>
        </PageShell>
      );
      expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeDefined();
      expect(screen.getByText('COSMOS')).toBeDefined();
    });
  });

  describe('Section Component', () => {
    it('renders section landmark with container and header', () => {
      render(
        <Section title="Validation Evidence" eyebrow="Empirical Proof" spacing="lg">
          <p>Section Content</p>
        </Section>
      );
      expect(screen.getByText('Validation Evidence')).toBeDefined();
      expect(screen.getByText('Empirical Proof')).toBeDefined();
      expect(screen.getByText('Section Content')).toBeDefined();
    });
  });

  describe('Breadcrumbs Component', () => {
    it('marks the last breadcrumb item with aria-current="page"', () => {
      render(
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technology', href: '/technology' },
            { label: 'Capabilities' },
          ]}
        />
      );
      const currentItem = screen.getByText('Capabilities');
      expect(currentItem.getAttribute('aria-current')).toBe('page');
    });
  });
});

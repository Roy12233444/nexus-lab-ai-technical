import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--nexus-bg-primary)] text-[var(--nexus-text-primary)]">
      <Header currentPath="/" />

      <PageShell
        title="AI Systems Innovation Company"
        description="Researching, engineering, and validating durable intelligent-system capabilities."
        eyebrow="Nexus LAB AI"
        width="reading"
      >
        <Section spacing="md" width="reading">
          <div className="flex flex-col gap-6">
            <h2 className="nexus-h3 font-semibold">Architectural Milestone Status</h2>

            <p className="nexus-body text-[var(--nexus-text-secondary)]">
              The website shell encapsulates the foundation and design system, structuring content
              into reliable, accessible, and responsive components.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="nexus-code-inline text-xs">01 Foundation 🟢 LOCKED</span>
              <span className="nexus-code-inline text-xs">02 Design System 🟢 LOCKED</span>
              <span className="nexus-code-inline text-xs">03A Header & Navigation 🟢 LOCKED</span>
              <span className="nexus-code-inline text-xs">03B Footer & Legal/Meta 🟢 LOCKED</span>
              <span className="nexus-code-inline text-xs">03C PageShell Engine 🟢 ACTIVE</span>
            </div>
          </div>
        </Section>
      </PageShell>

      <Footer />
    </div>
  );
}

export default App;

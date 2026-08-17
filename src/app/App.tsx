import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--nexus-bg-primary)] text-[var(--nexus-text-primary)]">
      <Header currentPath="/" />

      <main className="flex-1">
        <section className="nexus-container flex min-h-[calc(100vh-16rem)] items-center py-24">
          <div className="nexus-reading-container">
            <p className="nexus-meta-label mb-4">Nexus LAB AI</p>

            <h1 className="nexus-h1 max-w-4xl font-semibold tracking-tight">
              AI Systems Innovation Company
            </h1>

            <p className="nexus-body-lg mt-6 max-w-2xl">
              Researching, engineering, and validating durable intelligent-system capabilities.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="nexus-code-inline">01 Foundation 🟢 LOCKED</span>
              <span className="nexus-code-inline">02 Design System 🟢 LOCKED</span>
              <span className="nexus-code-inline">03A Header & Navigation 🟢 LOCKED</span>
              <span className="nexus-code-inline">03B Footer & Legal/Meta 🟢 ACTIVE</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

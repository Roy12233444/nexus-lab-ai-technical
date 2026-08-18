import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Overview } from '@/pages/Overview/Overview';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--nexus-bg-primary)] text-[var(--nexus-text-primary)]">
      <Header currentPath="/" />
      <Overview />
      <Footer />
    </div>
  );
}

export default App;

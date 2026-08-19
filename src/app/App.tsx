import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Overview } from '@/pages/Overview/Overview';
import { Research } from '@/pages/Research/Research';
import { ROUTES } from '@/lib/routes';

function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || ROUTES.HOME;
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || ROUTES.HOME);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (href: string) => {
    setCurrentPath(href);
    window.history.pushState({}, '', href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    if (currentPath === ROUTES.RESEARCH || currentPath.startsWith('/research')) {
      return <Research onNavigate={handleNavigate} />;
    }
    return <Overview onNavigate={handleNavigate} />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--nexus-bg-primary)] text-[var(--nexus-text-primary)]">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1">{renderCurrentPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

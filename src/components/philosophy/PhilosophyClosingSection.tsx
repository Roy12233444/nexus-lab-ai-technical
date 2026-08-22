import React from 'react';
import { CANONICAL_PHILOSOPHY_REGISTRY } from '@/content/philosophy/philosophy';
import { ROUTES } from '@/lib/routes';
import { ArrowRight, BookOpen, Cpu, Layers } from 'lucide-react';

interface PhilosophyClosingSectionProps {
  onNavigate?: (path: string) => void;
}

export const PhilosophyClosingSection: React.FC<PhilosophyClosingSectionProps> = ({
  onNavigate,
}) => {
  const { identity } = CANONICAL_PHILOSOPHY_REGISTRY;

  return (
    <div className="mx-auto max-w-3xl space-y-8 text-center">
      {/* Narrative Synthesis */}
      <div className="space-y-4">
        <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
          {identity.mandate}
        </p>
      </div>

      {/* Navigation Gateway Cards */}
      <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.RESEARCH)}
          className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform group-hover:scale-110">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="font-mono text-xs font-bold text-sky-700 uppercase">Track 04B</span>
          <span className="mt-1 text-base font-bold text-slate-900">Research Programs</span>
          <span className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-sky-600">
            <span>Inquiry & Formulations</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.TECHNOLOGY)}
          className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform group-hover:scale-110">
            <Cpu className="h-5 w-5" />
          </div>
          <span className="font-mono text-xs font-bold text-sky-700 uppercase">Track 04C</span>
          <span className="mt-1 text-base font-bold text-slate-900">Technology Systems</span>
          <span className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-sky-600">
            <span>Substrates & Engines</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.PROGRAMS)}
          className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform group-hover:scale-110">
            <Layers className="h-5 w-5" />
          </div>
          <span className="font-mono text-xs font-bold text-sky-700 uppercase">Track 04D</span>
          <span className="mt-1 text-base font-bold text-slate-900">Major Programs</span>
          <span className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-sky-600">
            <span>Sovereign Initiatives</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>
      </div>
    </div>
  );
};

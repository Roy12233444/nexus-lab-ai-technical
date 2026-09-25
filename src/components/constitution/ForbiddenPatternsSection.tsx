import React from 'react';
import { CONSTITUTION_DATA } from '@/content/constitution/constitution';
import { Ban, Terminal } from 'lucide-react';

export const ForbiddenPatternsSection: React.FC = () => {
  const { forbiddenPatterns } = CONSTITUTION_DATA;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-wider">
            Zero-Tolerance Doctrine
          </span>
          <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Twelve Outlawed Implementation Anti-Patterns
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 font-mono text-xs font-bold text-rose-800">
          <Ban className="h-3.5 w-3.5 text-rose-600" />
          <span>F-01 THROUGH F-12 FORBIDDEN</span>
        </div>
      </div>

      <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-3xl">
        Any pull request, commit, or automated agent trajectory that relies on these patterns is rejected during code review and automated AST auditing.
      </p>

      {/* Grid of Anti-Patterns */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {forbiddenPatterns.map((pattern) => (
          <div
            key={pattern.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-rose-300 hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-md border border-rose-200 bg-rose-50 px-2 py-0.5 font-mono text-xs font-extrabold text-rose-800">
                  {pattern.id}
                </span>
                <span className="font-mono text-[10px] text-slate-400 font-semibold uppercase">
                  ANTI-PATTERN
                </span>
              </div>

              <h4 className="font-sans text-base font-bold text-slate-900">{pattern.name}</h4>

              <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3">
                <span className="block font-mono text-[10px] font-bold text-rose-800 uppercase">
                  Violation:
                </span>
                <p className="mt-0.5 font-sans text-xs text-slate-700 leading-relaxed">
                  {pattern.violation}
                </p>
              </div>

              {pattern.codeSnippet && (
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-slate-300">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-rose-400 font-bold mb-1">
                    <Terminal className="h-3 w-3" />
                    <span>FORBIDDEN CODE PATH:</span>
                  </div>
                  <pre className="font-mono text-[11px] leading-tight text-rose-300 overflow-x-auto">
                    <code>{pattern.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="mt-4 border-t border-slate-100 pt-3">
              <span className="block font-mono text-[10px] font-bold text-emerald-700 uppercase">
                Mandatory Remedy:
              </span>
              <p className="mt-0.5 font-sans text-xs text-slate-600 leading-relaxed">
                {pattern.remedy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

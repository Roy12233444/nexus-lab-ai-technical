import React from 'react';
import { CONSTITUTION_DATA } from '@/content/constitution/constitution';
import { ShieldCheck, Download } from 'lucide-react';

export const AxiomsSection: React.FC = () => {
  const { axioms, metadata } = CONSTITUTION_DATA;

  const handleDownloadSpec = () => {
    // Generate downloadable markdown text from canonical protocol
    const markdownContent = `# ${metadata.title}\n\n${metadata.subtitle}\n\nStatus: ${metadata.status}\nDoctrine: ${metadata.doctrine}\nScope: ${metadata.scope}\n\nAxiom: "${metadata.axiom}"\n\n## 9 Governing Axioms\n${axioms.map((a, i) => `${i + 1}. **${a.rule}**: ${a.detail}`).join('\n')}\n`;
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NEXUS_ARCHITECTURE_CONSTITUTION_V1.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12">
      {/* 9 Foundational Axioms */}
      <div className="space-y-6">
        <div>
          <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">
            First Principles
          </span>
          <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Nine Foundational Systems Axioms
          </h3>
          <p className="mt-2 font-sans text-sm text-slate-600 leading-relaxed max-w-3xl">
            The governing laws of software construction across all autonomous substrates at Nexus LAB AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {axioms.map((axiom, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-sky-300 hover:shadow-xs"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 font-mono text-xs font-extrabold text-sky-700">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-sm font-bold text-slate-900">{axiom.rule}</h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  {axiom.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Specification Dossier Box */}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-8 text-white sm:p-10 shadow-lg">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-sky-400" />
              <span className="font-mono text-xs font-bold tracking-wider text-sky-300 uppercase">
                Canonical Research Artifact
              </span>
            </div>
            <h4 className="font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Download the Official Architecture Constitution
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              Export the canonical, versioned markdown specification (V1.0) containing the full 15 Invariants, Adversarial Proofs, and Architectural Change Protocols.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadSpec}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-sans text-xs font-bold text-white shadow-sm transition-all hover:bg-sky-400 hover:shadow-md cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Export Specification (.md)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

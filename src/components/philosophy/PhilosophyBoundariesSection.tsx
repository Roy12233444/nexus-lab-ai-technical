import React from 'react';
import { getQuarantinedClaims } from '@/content/philosophy/philosophy';
import { CheckCircle2, XCircle, ShieldAlert, Check, X, ShieldX } from 'lucide-react';

export const PhilosophyBoundariesSection: React.FC = () => {
  const quarantined = getQuarantinedClaims();

  return (
    <div className="space-y-10">
      {/* Claims vs Non-Claims Comparative Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* What Nexus LAB AI Claims */}
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs sm:p-8">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900">What Nexus LAB AI Asserts</h3>
          </div>
          <ul className="space-y-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
            <li className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>
                <strong>Epistemic Framework:</strong> Classical Indian epistemology provides rich,
                multi-layered taxonomies of valid cognition, error, and inference.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>
                <strong>Cognitive Models:</strong> Multi-tier cognitive architectures offer valuable
                analogies for separating sensory parsing, contextual attention, and deterministic
                judgment.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>
                <strong>Contextual Alignment:</strong> Role-scoped duty boundaries (Svadharma) and
                capability authorization (Adhikāra) provide robust formal principles for agent
                governance.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>
                <strong>Explicit Hypotheses:</strong> Conceptual insights are formulated as testable
                scientific conjectures subject to empirical validation.
              </span>
            </li>
          </ul>
        </div>

        {/* What Nexus LAB AI Refuses to Claim */}
        <div className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 shadow-2xs sm:p-8">
          <div className="flex items-center gap-2">
            <XCircle className="h-6 w-6 text-amber-700" />
            <h3 className="text-lg font-bold text-slate-900">What Nexus LAB AI Rejects</h3>
          </div>
          <ul className="space-y-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
              <span>
                <strong>No Historical Anachronism:</strong> Ancient texts did not invent, predict,
                or describe modern electronic neural networks or electronic computers.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
              <span>
                <strong>No Literal Equivalence:</strong> Classical concepts are not 1:1 identical to
                modern software modules or algorithms.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
              <span>
                <strong>No Sentience Claims:</strong> Computational models operate strictly in
                material functionalism; we make zero claims of machine consciousness or Ātman.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
              <span>
                <strong>No Proof by Analogy:</strong> A philosophical resonance or naming metaphor
                does not constitute empirical scientific proof of correctness.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quarantined Master Assertions Box */}
      <div className="space-y-4 rounded-2xl border border-red-200 bg-red-50/30 p-6 shadow-2xs sm:p-8">
        <div className="flex items-center justify-between border-b border-red-200 pb-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-red-700" />
            <span className="font-mono text-xs font-bold text-red-900 uppercase">
              Epistemic Quarantine Registry
            </span>
          </div>
          <span className="rounded bg-red-200 px-2 py-0.5 font-mono text-[10px] font-bold text-red-900">
            5 Quarantined Classes
          </span>
        </div>

        <p className="text-xs text-slate-600">
          The following pseudo-scientific assertions are formally barred by validation rules from
          appearing anywhere in Nexus LAB AI technical literature:
        </p>

        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {quarantined.map((q) => (
            <div
              key={q.id}
              className="space-y-2 rounded-xl border border-red-100 bg-white p-4 shadow-2xs"
            >
              <div className="flex items-center justify-between font-mono text-[10px] font-bold text-red-800">
                <span className="flex items-center gap-1">
                  <ShieldX className="h-3 w-3 text-red-600" />
                  {q.id}
                </span>
                <span className="rounded bg-red-100 px-1.5 py-0.5 uppercase">
                  {q.violatesInvariant}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-900 line-through decoration-red-500">
                "{q.claim}"
              </p>
              <p className="text-[11px] text-slate-500 italic">{q.quarantineReason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

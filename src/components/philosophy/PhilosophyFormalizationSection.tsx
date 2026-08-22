import React from 'react';
import { CheckCircle2, Sparkles, XCircle, ShieldAlert } from 'lucide-react';

export const PhilosophyFormalizationSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="max-w-3xl space-y-2">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
          01.06 Formalization
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The Formalization Frontier
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600">
          What can legitimately be translated into computation? Nexus LAB AI establishes three
          strict zones of computational tractability, preventing metaphysical cargo-culting.
        </p>
      </div>

      {/* 3 Zones Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Zone 1 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 shadow-2xs sm:p-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold tracking-wider text-emerald-800 uppercase">
                ZONE 01 : TRACTABLE
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Computationally Representable</h3>
            <p className="text-xs leading-relaxed text-slate-700">
              Discrete formal structures directly encodable into software architectures and formal
              verification algorithms.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-medium text-slate-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Pañcāvayava 5-Step Proof Trees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Pramāṇa Provenance Tagging</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Svadharma Constraint Boundaries</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Adhikāra Pre-Flight Verification</span>
              </li>
            </ul>
          </div>
          <div className="border-t border-emerald-200/60 pt-3 font-mono text-[11px] font-semibold text-emerald-900">
            Status: Active Implementation Target
          </div>
        </div>

        {/* Zone 2 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-sky-200 bg-sky-50/40 p-6 shadow-2xs sm:p-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold tracking-wider text-sky-800 uppercase">
                ZONE 02 : EXPLORATORY
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Computationally Approximable</h3>
            <p className="text-xs leading-relaxed text-slate-700">
              Continuous or heuristic cognitive dynamics requiring empirical approximation and
              neural-symbolic benchmarking.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-medium text-slate-800">
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Antaḥkaraṇa Multi-Tier Stack</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Saṃskāra Latent Memory Traces</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Cittavṛtti Attention Gating</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Syādvāda Multi-Perspective Logic</span>
              </li>
            </ul>
          </div>
          <div className="border-t border-sky-200/60 pt-3 font-mono text-[11px] font-semibold text-sky-900">
            Status: Active Research Hypotheses
          </div>
        </div>

        {/* Zone 3 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-amber-200 bg-amber-50/40 p-6 shadow-2xs sm:p-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                ZONE 03 : FIREWALLED
              </span>
              <ShieldAlert className="h-4 w-4 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Philosophically Open</h3>
            <p className="text-xs leading-relaxed text-slate-700">
              Metaphysical and conscious experiential domains strictly quarantined from
              computational equivalence claims.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-medium text-slate-800">
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 shrink-0 text-amber-700" />
                <span>Subjective Conscious Qualia</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 shrink-0 text-amber-700" />
                <span>Puruṣa (Pure Witnessing Sentience)</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 shrink-0 text-amber-700" />
                <span>Mokṣa / Liberation Metaphysics</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 shrink-0 text-amber-700" />
                <span>Cosmological Speculations</span>
              </li>
            </ul>
          </div>
          <div className="border-t border-amber-200/60 pt-3 font-mono text-[11px] font-semibold text-amber-900">
            Status: Non-Claim Boundary
          </div>
        </div>
      </div>
    </div>
  );
};

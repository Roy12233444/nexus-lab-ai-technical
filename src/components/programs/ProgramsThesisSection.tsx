import React from 'react';

export const ProgramsThesisSection: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Editorial Lead Block */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
            Institutional Definition
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Defines a Nexus LAB AI Program?
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            Within Nexus LAB AI, a <strong className="text-slate-900">Program</strong> is not a
            commercial product, a SaaS packaging SKU, or an ephemeral demo. It is a{' '}
            <strong className="text-slate-900">
              sovereign systems engineering and research initiative
            </strong>{' '}
            architected to solve a well-defined frontier problem in artificial intelligence through
            first-principles computational mechanisms.
          </p>
        </div>
      </div>

      {/* Triad Column Layout: Research vs Technology vs Programs */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Track 1: Research */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-500 uppercase">
                Track 04B
              </span>
              <span className="rounded bg-sky-50 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-700">
                INQUIRY
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Research Track</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Investigates <strong className="text-slate-800">"Why"</strong>: theoretical theses,
              empirical hypotheses, mathematical bounds, and failure modes in autonomous
              intelligence.
            </p>
          </div>
          <div className="mt-6 border-t border-slate-100 pt-4 font-mono text-xs text-slate-500">
            Output: Verified Evidence & Theses
          </div>
        </div>

        {/* Track 2: Technology */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-500 uppercase">
                Track 04C
              </span>
              <span className="rounded bg-sky-50 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-700">
                SUBSTRATE
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Technology Track</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Engineers <strong className="text-slate-800">"How"</strong>: low-level computational
              substrates, neural transformer blocks, Anderson solvers, and Rust relays.
            </p>
          </div>
          <div className="mt-6 border-t border-slate-100 pt-4 font-mono text-xs text-slate-500">
            Output: Capabilities & Substrates
          </div>
        </div>

        {/* Track 3: Programs */}
        <div className="flex flex-col justify-between rounded-xl border-2 border-sky-300 bg-sky-50/40 p-6 shadow-sm transition-all hover:border-sky-400">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sky-800 uppercase">Track 04D</span>
              <span className="rounded bg-sky-600 px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                SYSTEMS
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Programs Track</h3>
            <p className="text-sm leading-relaxed text-slate-700">
              Constructs <strong className="text-slate-900">"What We Build"</strong>: coherent
              sovereign systems vehicles combining research insights with engineered substrates.
            </p>
          </div>
          <div className="mt-6 border-t border-sky-200/60 pt-4 font-mono text-xs font-semibold text-sky-800">
            Output: Sovereign System Initiatives
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { CONSTITUTION_DATA } from '@/content/constitution/constitution';
import { ShieldCheck, ChevronDown, ChevronUp, Search, AlertOctagon, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

export const InvariantMatrixSection: React.FC = () => {
  const { invariants } = CONSTITUTION_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('I-01');

  const categories = [
    'All',
    'Identity & Separation',
    'State & Mutation',
    'Authorization & HITL',
    'Execution & Recovery',
    'Projections & Transport',
  ];

  const filteredInvariants = invariants.filter((inv) => {
    const matchesCategory = selectedCategory === 'All' || inv.category === selectedCategory;
    const matchesSearch =
      inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="invariants-matrix" className="space-y-8">
      {/* Category Pills & Search Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                'rounded-lg px-3 py-1.5 font-sans text-xs font-semibold transition-all cursor-pointer',
                selectedCategory === cat
                  ? 'border border-slate-200 bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[220px]">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search invariants (e.g. I-07, state)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pr-3 pl-8 font-sans text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Invariants Grid / Accordion */}
      <div className="grid grid-cols-1 gap-4">
        {filteredInvariants.map((inv) => {
          const isExpanded = expandedId === inv.id;

          return (
            <div
              key={inv.id}
              className={clsx(
                'rounded-2xl border transition-all duration-200',
                isExpanded
                  ? 'border-sky-300 bg-gradient-to-b from-white to-sky-50/20 shadow-md ring-1 ring-sky-200'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-2xs'
              )}
            >
              {/* Header Row */}
              <button
                type="button"
                onClick={() => toggleExpand(inv.id)}
                className="flex w-full items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex h-8 w-11 shrink-0 items-center justify-center rounded-lg border border-sky-200 bg-sky-50 font-mono text-xs font-extrabold text-sky-800">
                    {inv.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-sm font-bold text-slate-900 sm:text-base">
                        {inv.title}
                      </span>
                      <span className="hidden sm:inline-block rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600">
                        {inv.category}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {inv.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-700">
                    <ShieldCheck className="h-3 w-3" />
                    <span>ENFORCED</span>
                  </span>
                  <div className="rounded-lg p-1 text-slate-400 hover:text-slate-700">
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </div>
              </button>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="border-t border-slate-100 p-5 sm:p-6 space-y-5 bg-white/60">
                  {/* Formal System Rule */}
                  <div className="rounded-xl border border-slate-200 bg-slate-900 p-4 text-white">
                    <span className="block font-mono text-[10px] font-bold tracking-wider text-sky-400 uppercase">
                      Formal Architectural Specification
                    </span>
                    <p className="mt-1 font-mono text-xs text-slate-200 sm:text-sm">
                      {inv.formalRule}
                    </p>
                  </div>

                  {/* Dual Verification Proofs */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Positive Proof */}
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                      <div className="flex items-center gap-2 text-emerald-800">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        <span className="font-mono text-xs font-bold uppercase">Positive Proof</span>
                      </div>
                      <p className="mt-1.5 font-sans text-xs text-slate-700 leading-relaxed">
                        {inv.positiveProof}
                      </p>
                    </div>

                    {/* Negative Proof */}
                    <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4">
                      <div className="flex items-center gap-2 text-rose-800">
                        <AlertOctagon className="h-4 w-4 shrink-0 text-rose-600" />
                        <span className="font-mono text-xs font-bold uppercase">Negative Boundary</span>
                      </div>
                      <p className="mt-1.5 font-sans text-xs text-slate-700 leading-relaxed">
                        {inv.negativeProof}
                      </p>
                    </div>
                  </div>

                  {/* Adversarial Stress Test Scenario */}
                  <div className="rounded-xl border border-sky-200 bg-sky-50/40 p-4">
                    <span className="block font-mono text-[10px] font-bold text-sky-800 uppercase tracking-wider">
                      Adversarial Test & Failure Injection
                    </span>
                    <p className="mt-1 font-sans text-xs text-slate-700 leading-relaxed">
                      {inv.adversarialTest}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

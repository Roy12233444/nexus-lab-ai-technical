import React from 'react';
import { CANONICAL_PHILOSOPHY_REGISTRY } from '@/content/philosophy/philosophy';
import { BookOpen, Compass, Languages, Sparkles, FlaskConical, Cpu } from 'lucide-react';

export const PhilosophyThesisSection: React.FC = () => {
  const { identity } = CANONICAL_PHILOSOPHY_REGISTRY;

  return (
    <div className="space-y-10">
      {/* Editorial Mandate Block */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
            The Integration Thesis
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Investigate Classical Indian Epistemology for AI?
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            {identity.mandate}
          </p>
        </div>
      </div>

      {/* Unidirectional Pipeline Diagram Layout */}
      <div className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <span className="block font-mono text-xs font-bold tracking-widest text-slate-700 uppercase">
          Unidirectional Shastra–AI Research Pipeline
        </span>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {/* Step 1 */}
          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <div className="flex items-center justify-between font-mono text-[10px] font-bold text-slate-500">
              <span>STEP 01</span>
              <span className="text-sky-600">SOURCE</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Classical Śāstra</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Historical Sanskrit texts analyzing human cognition, logic, and grammar.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <div className="flex items-center justify-between font-mono text-[10px] font-bold text-slate-500">
              <span>STEP 02</span>
              <span className="text-sky-600">INQUIRY</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
              <Compass className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Philosophical Core</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Extracting invariant questions: how is valid knowledge acquired and verified?
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <div className="flex items-center justify-between font-mono text-[10px] font-bold text-slate-500">
              <span>STEP 03</span>
              <span className="text-sky-600">INTERPRET</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
              <Languages className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Modern Framing</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Translating epistemological insights into computational systems terminology.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <div className="flex items-center justify-between font-mono text-[10px] font-bold text-slate-500">
              <span>STEP 04</span>
              <span className="text-sky-600">FORMALIZE</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">AI Hypothesis</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Constructing testable conjectures regarding verification and memory.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <div className="flex items-center justify-between font-mono text-[10px] font-bold text-slate-500">
              <span>STEP 05</span>
              <span className="text-sky-600">TEST</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
              <FlaskConical className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Lab Experiments</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Evaluating proof-trees and multi-tier memory in adversarial benchmarks.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="space-y-3 rounded-xl border-2 border-sky-300 bg-sky-50/50 p-4 shadow-2xs">
            <div className="flex items-center justify-between font-mono text-[10px] font-bold text-sky-800">
              <span>STEP 06</span>
              <span className="text-sky-600">ENGINEER</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Systems Build</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-700">
                Operationalizing verified mechanisms into sovereign software engines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

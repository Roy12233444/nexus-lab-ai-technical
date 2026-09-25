import React from 'react';
import { CONSTITUTION_DATA } from '@/content/constitution/constitution';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export const DoDPipelineSection: React.FC = () => {
  const { pipelineStages } = CONSTITUTION_DATA;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6">
          <div>
            <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">
              Verification Rigor
            </span>
            <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              The 13-Stage Definition of Done (DoD)
            </h3>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 font-mono text-xs font-bold text-sky-800">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>MANDATORY BEFORE MERGE</span>
          </div>
        </div>

        <p className="mt-4 font-sans text-sm text-slate-600 leading-relaxed max-w-3xl">
          At Nexus LAB AI, a pull request or automated agent execution is strictly blocked until it satisfies all thirteen stages in sequence. There are no shortcuts or bypass paths.
        </p>

        {/* The 13-Stage Linear Timeline */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pipelineStages.map((stage) => (
            <div
              key={stage.step}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:border-sky-300 hover:bg-white hover:shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-extrabold text-sky-700">
                    STAGE {stage.step.toString().padStart(2, '0')}
                  </span>
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <h4 className="font-sans text-sm font-bold text-slate-900">{stage.name}</h4>
                <div className="rounded-lg bg-white border border-slate-200/80 p-2">
                  <span className="block font-mono text-[10px] font-bold text-slate-500 uppercase">
                    Gate Check:
                  </span>
                  <span className="block font-sans text-xs text-slate-800 font-medium">
                    {stage.gate}
                  </span>
                </div>
              </div>

              <div className="mt-3 border-t border-slate-200/60 pt-2 font-sans text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Required Evidence:</span> {stage.evidence}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

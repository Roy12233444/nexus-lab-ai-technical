import React from 'react';
import { getFutureVisualAsset } from '@/content/future/visualRegistry';
import { ROUTES } from '@/lib/routes';
import { BookOpen, Cpu, ShieldCheck, Compass, ArrowRight } from 'lucide-react';

export interface FutureClosingSectionProps {
  onNavigate?: (href: string) => void;
}

export const FutureClosingSection: React.FC<FutureClosingSectionProps> = ({ onNavigate }) => {
  const visual = getFutureVisualAsset('FUTURE-IMG-007');

  const gateways = [
    {
      title: 'Research Programs',
      href: ROUTES.RESEARCH,
      description: 'Explore NALA, AMP, RTA-GUARD, and COSMOS deep-dive research dossiers.',
      tag: 'Track 04B',
      icon: BookOpen,
      color: 'text-sky-600 bg-sky-50',
    },
    {
      title: 'Technology Capabilities',
      href: ROUTES.TECHNOLOGY,
      description:
        'Review sovereign technical capabilities, runtime substrates, and project nodes.',
      tag: 'Track 04C',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      title: 'Major Programs',
      href: ROUTES.PROGRAMS,
      description:
        'Inspect flagship systems engineering vectors, supporting engines, and state matrices.',
      tag: 'Track 04D',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Philosophy & Horizon',
      href: ROUTES.PHILOSOPHY,
      description:
        'Examine first-principles reasoning, epistemic frameworks, and classical Shastra foundations.',
      tag: 'Track 04E',
      icon: Compass,
      color: 'text-purple-600 bg-purple-50',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Panoramic Closing Visual (Image 7: Humanity Looking Toward Long Horizon) */}
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
        <img
          src={visual.publicPath}
          alt={visual.altText}
          className="h-auto w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="border-t border-slate-100 bg-white px-4 py-3 text-center font-mono text-xs text-slate-500">
          {visual.caption}
        </figcaption>
      </figure>

      {/* Exploration Gateway Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold tracking-wider text-slate-700 uppercase">
            Explore Supporting Research & Systems Tracks
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            Continuous Institutional Research
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gateways.map((item, idx) => {
            const Icon = item.icon;

            return (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate(item.href);
                  }
                }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-sky-300 hover:shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.color} transition-transform group-hover:scale-105`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-500 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 transition-colors group-hover:text-sky-700">
                      {item.title}
                    </h4>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 border-t border-slate-100 pt-2.5 text-xs font-semibold text-slate-500 transition-colors group-hover:text-sky-600">
                  <span>Explore Track</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

FutureClosingSection.displayName = 'FutureClosingSection';

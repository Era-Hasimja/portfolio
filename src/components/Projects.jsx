import { Smartphone } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="Real products I've built and shipped — from ride-hailing and OCR to e-commerce and reservations."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              {/* Accent header */}
              <div
                className={`relative h-28 bg-gradient-to-r ${p.accent} p-6`}
              >
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-white">
                      {p.name}
                    </h3>
                    <p className="text-sm font-medium text-white/90">
                      {p.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  <Smartphone size={13} />
                  {p.platform}
                </p>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {p.highlights.slice(0, 4).map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

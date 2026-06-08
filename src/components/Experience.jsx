import { Briefcase } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      className="bg-slate-50/60 dark:bg-slate-900/30"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 sm:left-[27px]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="relative flex gap-5 sm:gap-7">
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-brand-600 shadow-sm sm:h-14 sm:w-14 dark:border-slate-700 dark:bg-slate-900 dark:text-brand-400">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {job.role}
                      <span className="text-brand-600 dark:text-brand-400">
                        {' '}
                        · {job.company}
                      </span>
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        job.current
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {job.location}
                  </p>
                  <p className="mt-3 text-slate-600 dark:text-slate-400">
                    {job.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

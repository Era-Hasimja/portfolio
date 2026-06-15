import { Briefcase } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 sm:left-[27px]" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="relative flex gap-5 sm:gap-7">
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-sky-400 sm:h-14 sm:w-14">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-bold text-white">
                      {job.role}
                      <span className="bg-gradient-to-r from-sky-400 to-brand-400 bg-clip-text text-transparent">
                        {' '}
                        · {job.company}
                      </span>
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        job.current
                          ? 'border border-brand-500/30 bg-brand-500/10 text-brand-300'
                          : 'border border-white/10 bg-white/5 text-slate-400'
                      }`}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                  <p className="mt-3 text-slate-300">{job.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-400">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="mt-0.5 text-brand-400">▸</span>
                        <span>{pt}</span>
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

import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { profile, softSkills } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="flex flex-wrap gap-2 pt-2">
            {softSkills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-slate-100 px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-1">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="bg-gradient-to-r from-brand-500 to-fuchsia-500 bg-clip-text font-display text-4xl font-extrabold text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

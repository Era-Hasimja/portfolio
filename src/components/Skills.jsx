import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      subtitle="The technologies I use to design and ship products across web and mobile."
      className="bg-slate-50/60 dark:bg-slate-900/30"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((cat, i) => (
          <Reveal key={cat.group} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {cat.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

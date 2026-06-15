import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tech stack & tools"
      subtitle="The technologies I use to design and ship products across web and mobile."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((cat, i) => (
          <Reveal key={cat.group} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-lg font-semibold text-sky-300">
                {cat.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300"
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

import { GraduationCap, BookOpen, Languages as LangIcon } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { courses, education, languages } from '../data/portfolio'

export default function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education & courses">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Education */}
        <Reveal>
          <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-sky-400">
              <GraduationCap size={20} />
              <h3 className="font-display text-lg font-semibold text-white">
                Education
              </h3>
            </div>
            <div className="space-y-5">
              {education.map((e) => (
                <div key={e.title}>
                  <p className="font-semibold text-slate-100">{e.title}</p>
                  <p className="text-sm text-slate-400">{e.org}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {e.location} · {e.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Courses */}
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-sky-400">
              <BookOpen size={20} />
              <h3 className="font-display text-lg font-semibold text-white">
                Courses
              </h3>
            </div>
            <div className="space-y-5">
              {courses.map((c) => (
                <div key={c.title}>
                  <p className="font-semibold text-slate-100">{c.title}</p>
                  <p className="text-sm text-slate-400">{c.org}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {c.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Languages */}
        <Reveal delay={0.16}>
          <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-sky-400">
              <LangIcon size={20} />
              <h3 className="font-display text-lg font-semibold text-white">
                Languages
              </h3>
            </div>
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between">
                  <span className="font-semibold text-slate-100">{l.name}</span>
                  <span className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

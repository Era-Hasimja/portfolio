import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-24">
      {/* Glow — sky + emerald, blended */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-brand-500/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-5xl fade-up">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
          Open to new opportunities
        </p>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl text-slate-300 sm:text-2xl">
          {profile.title} —{' '}
          <span className="bg-gradient-to-r from-sky-400 to-brand-400 bg-clip-text font-semibold text-transparent">
            React &amp; React Native
          </span>
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          I build clean, reliable, user-friendly products for iOS, Android, and
          the web. Hands-on experience with real-time features, dashboards,
          authentication systems, and complex app flows — shipped on live
          products in fast-moving startup environments.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-brand-500 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            View my work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 font-medium text-slate-200 transition-colors hover:border-sky-400/50 hover:bg-white/5 hover:text-sky-300"
          >
            Get in touch
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-slate-400 transition-colors hover:text-sky-300"
            >
              <Download size={16} />
              Download CV
            </a>
          )}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} className="text-sky-400" /> {profile.location} · CET
          </span>
          <span>3+ years experience</span>
          <span>English &amp; Albanian</span>
          <div className="flex items-center gap-1">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
            >
              <Mail size={16} />
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
              >
                <LinkedinIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

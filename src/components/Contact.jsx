import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import Reveal from './ui/Reveal'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-600 to-fuchsia-600 px-8 py-14 text-center shadow-xl dark:border-slate-800 sm:px-14">
            <div
              aria-hidden
              className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:18px_18px]"
            />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Let&apos;s build something great
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
                I&apos;m open to front-end roles, freelance work and
                collaborations. Drop me a line — I&apos;ll reply quickly.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  {profile.email}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  <Phone size={16} />
                  {profile.phone}
                </a>
              </div>

              {(profile.github || profile.linkedin) && (
                <div className="mt-6 flex items-center justify-center gap-3">
                  {profile.github && (
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {profile.linkedin && (
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

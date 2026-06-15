import { Download, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import Section from './ui/Section'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-transparent to-brand-500/10 p-8 sm:p-12">
        <p className="max-w-xl text-lg leading-relaxed text-slate-300">
          I&apos;m open to front-end roles, freelance work and collaborations.
          If you&apos;re looking for someone who can own features end-to-end on
          React or React Native products, I&apos;d love to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            <Mail size={16} className="text-sky-400" />
            <span className="text-slate-200">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            <Phone size={16} className="text-sky-400" />
            <span className="text-slate-200">{profile.phone}</span>
          </a>
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200 transition-colors hover:border-sky-400/50 hover:text-sky-300"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200 transition-colors hover:border-sky-400/50 hover:text-sky-300"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          )}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-brand-500 px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <Download size={16} />
              Download CV
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0f1a]/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          Era
          <span className="bg-gradient-to-r from-sky-400 to-brand-400 bg-clip-text text-transparent">
            .
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-sky-400"
            >
              {l.label}
            </a>
          ))}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-brand-500 px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
            >
              <Download size={15} />
              Download CV
            </a>
          )}
        </div>

        <button
          type="button"
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/5 bg-[#0a0f1a] px-6 py-4 text-sm md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 transition-colors hover:text-sky-400"
            >
              {l.label}
            </a>
          ))}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-brand-500 px-4 py-2 text-center font-medium text-white"
            >
              <Download size={15} />
              Download CV
            </a>
          )}
        </div>
      )}
    </header>
  )
}

import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-display text-sm text-slate-400">
          © {profile.name} · {profile.title}
        </p>
        <p className="text-sm text-slate-500">Built with React &amp; Tailwind CSS</p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-sky-400"
        >
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  )
}

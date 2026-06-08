import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {profile.name} · {profile.title}
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Built with React &amp; Tailwind CSS
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
        >
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  )
}

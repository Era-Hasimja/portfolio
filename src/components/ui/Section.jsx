import Reveal from './Reveal'

/**
 * A standard page section with an eyebrow label + heading.
 */
export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-white/5 px-6 py-20 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title) && (
          <Reveal className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="text-sm font-medium uppercase tracking-widest text-sky-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-slate-400">{subtitle}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ArrowUpRight, Globe, Images } from 'lucide-react'
import { AppleIcon, GooglePlayIcon } from './ui/BrandIcons'
import Lightbox from './ui/Lightbox'

function LinkIcon({ href }) {
  if (href.includes('apps.apple.com')) return <AppleIcon size={13} />
  if (href.includes('play.google.com')) return <GooglePlayIcon size={13} />
  return <Globe size={13} />
}

export default function ProjectCard({ project, index }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const gallery = project.gallery ?? []
  const hasGallery = gallery.length > 0
  const isPhone = project.galleryLayout === 'phone'
  const number = String(index + 1).padStart(2, '0')

  const overlay = (
    <>
      <div className="absolute bottom-4 left-5 right-5">
        <span className="font-display text-2xl font-bold text-white drop-shadow">
          {project.name}
        </span>
        <span className="block text-sm text-sky-300 drop-shadow">
          {project.subtitle}
        </span>
      </div>
      <span className="absolute bottom-4 right-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
        <Images size={13} />
        {gallery.length}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-black/40 px-2 py-0.5 font-display text-xs font-bold text-white/70 backdrop-blur">
        {number}
      </span>
      {project.links?.length > 0 && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-500/15 px-2.5 py-1 text-xs font-semibold text-brand-300 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
          Live
        </span>
      )}
    </>
  )

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-colors hover:border-sky-400/40">
      {/* ── Header ── */}
      {hasGallery ? (
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          aria-label={`View ${project.name} screenshots`}
          className={`relative block w-full overflow-hidden text-left ${
            isPhone ? 'aspect-[16/10]' : 'aspect-[16/8]'
          }`}
        >
          {isPhone ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-slate-900/50 to-brand-500/10" />
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:18px_18px]"
              />
              <div className="absolute inset-x-0 top-5 bottom-14 flex items-end justify-center gap-3">
                {gallery.slice(0, 3).map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-auto rounded-xl border border-white/10 object-contain shadow-2xl transition-transform duration-500 group-hover:-translate-y-1.5"
                  />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent" />
            </>
          ) : (
            <>
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
            </>
          )}
          {overlay}
        </button>
      ) : (
        <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-500/15 via-slate-900/40 to-brand-500/10">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:18px_18px]"
          />
          <div className="relative text-center">
            <span className="font-display text-3xl font-bold text-white">
              {project.name}
            </span>
            <span className="mt-1 block text-sm text-sky-300">
              {project.subtitle}
            </span>
          </div>
          <span className="absolute right-4 top-4 font-display text-sm font-bold text-white/30">
            {number}
          </span>
          {project.links?.length > 0 && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-500/15 px-2.5 py-1 text-xs font-semibold text-brand-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
              Live
            </span>
          )}
        </div>
      )}

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {project.platform}
        </p>
        <p className="mt-3 leading-relaxed text-slate-300">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-0.5 text-brand-400">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          {(hasGallery || project.links?.length > 0) && (
            <div className="mb-4 flex flex-wrap gap-2">
              {hasGallery && (
                <button
                  type="button"
                  onClick={() => setLightboxIndex(0)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition-colors hover:bg-sky-500/20 hover:text-sky-200"
                >
                  <Images size={13} />
                  Screenshots
                </button>
              )}
              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition-colors hover:bg-sky-500/20 hover:text-sky-200"
                >
                  <LinkIcon href={link.href} />
                  {link.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="cursor-pointer rounded-md border border-sky-500/20 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {hasGallery && lightboxIndex != null && (
        <Lightbox
          images={gallery}
          index={lightboxIndex}
          onIndex={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </article>
  )
}

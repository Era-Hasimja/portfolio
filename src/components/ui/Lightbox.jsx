import { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Full-screen image viewer with keyboard + click navigation.
 * Controlled: render only when `index` is a number; pass null/undefined to hide.
 */
export default function Lightbox({ images, index, onClose, onIndex }) {
  const count = images?.length ?? 0

  const prev = useCallback(
    () => onIndex((index - 1 + count) % count),
    [index, count, onIndex],
  )
  const next = useCallback(
    () => onIndex((index + 1) % count),
    [index, count, onIndex],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  if (index == null || count === 0) return null
  const current = images[index]

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project screenshots"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
      >
        <X size={20} />
      </button>

      {count > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous image"
          className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 sm:left-6"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      <motion.img
        key={current.src}
        src={current.src}
        alt={current.alt}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="max-h-[85vh] max-w-5xl rounded-xl border border-white/10 object-contain shadow-2xl"
      />

      {count > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next image"
          className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 sm:right-6"
        >
          <ChevronRight size={22} />
        </button>
      )}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-sm text-white/80 backdrop-blur">
        {index + 1} / {count}
      </div>
    </motion.div>,
    document.body,
  )
}

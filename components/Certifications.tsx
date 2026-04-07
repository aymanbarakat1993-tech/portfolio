'use client'

import { useState } from 'react'
import Image from 'next/image'

const certs = [
  {
    id: 1,
    title: 'Meta Front-End Developer',
    issuer: 'Meta / Coursera',
    date: 'Jan 2024',
    image: 'https://placehold.co/800x600/0d0d1a/4fffb0?text=Meta+Front-End+Developer',
    color: '#0081fb',
  },
  {
    id: 2,
    title: 'The Complete Node.js Developer Course',
    issuer: 'Udemy',
    date: 'Mar 2024',
    image: 'https://placehold.co/800x600/0d0d1a/7c6aff?text=Node.js+Developer+Course',
    color: '#a435f0',
  },
  {
    id: 3,
    title: 'React - The Complete Guide',
    issuer: 'Udemy / Maximilian Schwarzmüller',
    date: 'Jun 2023',
    image: 'https://placehold.co/800x600/0d0d1a/61dafb?text=React+Complete+Guide',
    color: '#61dafb',
  },
  {
    id: 4,
    title: 'MongoDB for JavaScript Developers',
    issuer: 'MongoDB University',
    date: 'Sep 2023',
    image: 'https://placehold.co/800x600/0d0d1a/47a248?text=MongoDB+Certification',
    color: '#47a248',
  },
  {
    id: 5,
    title: 'Next.js & React — The Complete Guide',
    issuer: 'Udemy',
    date: 'Nov 2023',
    image: 'https://placehold.co/800x600/0d0d1a/e8eaf0?text=Next.js+Complete+Guide',
    color: '#e8eaf0',
  },
  {
    id: 6,
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Apr 2023',
    image: 'https://placehold.co/800x600/0d0d1a/f0db4f?text=JavaScript+Algorithms',
    color: '#f0db4f',
  },
]

export default function Certifications() {
  const [selected, setSelected] = useState<(typeof certs)[0] | null>(null)

  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#4fffb0] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            // credentials
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#e8eaf0] mb-4"
            style={{ fontFamily: 'Syne, serif' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4fffb0, #7c6aff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Certifications
            </span>
          </h2>
          <p className="text-[#9aa0b4] text-base max-w-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Verified credentials from industry-leading platforms. Click any certificate to view it full-size.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certs.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelected(cert)}
              className="group electric-border glass-card rounded-xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-[#4fffb0]/40 focus:ring-offset-2 focus:ring-offset-[#080810]"
              aria-label={`View ${cert.title} certificate`}
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden bg-[#0d0d1a]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#080810]/0 group-hover:bg-[#080810]/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-[#4fffb0]/20 backdrop-blur-sm flex items-center justify-center border border-[#4fffb0]/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4fffb0" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
                {/* Color line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: cert.color }}
                />
              </div>

              {/* Info */}
              <div className="p-3">
                <h3
                  className="text-xs font-bold text-[#e8eaf0] leading-snug mb-1 line-clamp-2"
                  style={{ fontFamily: 'Syne, serif' }}
                >
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] text-[#9aa0b4] truncate"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {cert.issuer}
                  </span>
                  <span
                    className="text-[10px] ml-2 flex-shrink-0"
                    style={{ color: cert.color, fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {cert.date}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 bg-[#080810]/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} certificate`}
        >
          <div
            className="lightbox-content relative max-w-3xl w-full glass-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0d0d1a]/80 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-white/20 hover:bg-[#0d0d1a] transition-all duration-200"
              aria-label="Close lightbox"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8eaf0" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            {/* Info bar */}
            <div
              className="p-4 border-t border-white/[0.06] flex items-center justify-between"
              style={{ borderTopColor: `${selected.color}20` }}
            >
              <div>
                <h3
                  className="font-bold text-[#e8eaf0] text-base"
                  style={{ fontFamily: 'Syne, serif' }}
                >
                  {selected.title}
                </h3>
                <p
                  className="text-[#9aa0b4] text-sm mt-0.5"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {selected.issuer} · {selected.date}
                </p>
              </div>
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: selected.color }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

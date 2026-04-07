'use client'

import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with product management, cart functionality, secure payment integration, and an admin dashboard for inventory control.',
    image: 'https://placehold.co/600x400/0d0d1a/4fffb0?text=E-Commerce+Platform',
    tags: ['Next.js', 'MongoDB', 'Tailwind', 'Stripe'],
    liveUrl: 'https://example.com',
    color: '#4fffb0',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative project management tool with real-time updates, drag-and-drop boards, team roles, and analytics dashboard.',
    image: 'https://placehold.co/600x400/0d0d1a/7c6aff?text=Task+Management+App',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    color: '#7c6aff',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description:
      'A unified analytics dashboard that aggregates social media metrics, schedules posts, and visualizes engagement data across platforms.',
    image: 'https://placehold.co/600x400/0d0d1a/00e87a?text=Social+Media+Dashboard',
    tags: ['React', 'Express.js', 'Redux', 'Chart.js'],
    liveUrl: 'https://example.com',
    color: '#00e87a',
  },
  {
    id: 4,
    title: 'Real Estate Listings',
    description:
      'A property listing platform with advanced filtering, map integration, virtual tour support, and agent contact management.',
    image: 'https://placehold.co/600x400/0d0d1a/ff6b9d?text=Real+Estate+Listings',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
    liveUrl: 'https://example.com',
    color: '#ff6b9d',
  },
]

const tagColors: Record<string, string> = {
  'Next.js': 'rgba(255,255,255,0.07)',
  'React': 'rgba(97,218,251,0.1)',
  'Node.js': 'rgba(79,255,176,0.1)',
  'MongoDB': 'rgba(79,255,176,0.12)',
  'Tailwind': 'rgba(56,189,248,0.1)',
  'Express.js': 'rgba(255,255,255,0.07)',
  'Redux': 'rgba(124,106,255,0.15)',
  'Stripe': 'rgba(99,91,255,0.15)',
  'Socket.io': 'rgba(255,255,255,0.07)',
  'Chart.js': 'rgba(255,159,64,0.12)',
  'Prisma': 'rgba(255,255,255,0.07)',
  'PostgreSQL': 'rgba(51,103,145,0.2)',
  'Mapbox': 'rgba(79,255,176,0.1)',
  'default': 'rgba(255,255,255,0.06)',
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#4fffb0] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            // portfolio
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#e8eaf0] mb-4"
            style={{ fontFamily: 'Syne, serif' }}
          >
            Some of My{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4fffb0, #7c6aff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-[#9aa0b4] text-base max-w-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            A selection of real-world applications I've built — from concept to deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group electric-border glass-card rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52 bg-[#0d0d1a]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="card-img-overlay absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, rgba(8,8,16,0.95) 100%)`,
                  }}
                />
                {/* Color accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: project.color }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-[#e8eaf0] mb-2 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Syne, serif' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-[#9aa0b4] text-sm leading-relaxed mb-5"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs text-[#c8cdd8] border border-white/[0.06]"
                      style={{
                        background: tagColors[tag] || tagColors.default,
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-[#080810] transition-all duration-300 hover:shadow-lg active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`,
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View Live
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[#9aa0b4] border border-white/10 hover:border-white/20 hover:text-[#e8eaf0] transition-all duration-200"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    aria-label="View source code"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[#9aa0b4] border border-white/10 hover:border-white/20 hover:text-[#e8eaf0] transition-all duration-200 text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'

const highlights = [
  { icon: '🚀', label: 'Full Stack', desc: 'End-to-end development' },
  { icon: '⚡', label: 'Performance', desc: 'Optimized & scalable' },
  { icon: '🎨', label: 'UI/UX', desc: 'Pixel-perfect designs' },
  { icon: '🔒', label: 'Security', desc: 'Best practices first' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#4fffb0] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            // who i am
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#e8eaf0]"
            style={{ fontFamily: 'Syne, serif' }}
          >
            About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4fffb0, #7c6aff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Me
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="space-y-5 text-[#9aa0b4] leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <p>
                Hi! I'm{' '}
                <span className="text-[#e8eaf0] font-medium">YB</span>, a passionate Full Stack Developer
                with a love for crafting clean, efficient, and user-centric web applications. I thrive at
                the intersection of design and engineering — where beautiful interfaces meet robust backends.
              </p>
              <p>
                With hands-on experience across the entire JavaScript ecosystem — from{' '}
                <span className="text-[#4fffb0]">React & Next.js</span> on the frontend to{' '}
                <span className="text-[#7c6aff]">Node.js & MongoDB</span> on the backend — I build
                applications that are performant, scalable, and maintainable. I believe in writing code
                that not only works but is readable and well-structured.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source
                projects, or deepening my knowledge in system design and cloud architecture. I'm always
                eager to learn, collaborate, and tackle challenging problems that make a real difference.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-4 border border-white/[0.04] hover:border-[#4fffb0]/20 transition-colors duration-300 group"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div
                    className="text-sm font-bold text-[#e8eaf0] group-hover:text-[#4fffb0] transition-colors"
                    style={{ fontFamily: 'Syne, serif' }}
                  >
                    {item.label}
                  </div>
                  <div className="text-xs text-[#9aa0b4] mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-[#080810] transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,255,176,0.3)] active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #4fffb0, #00c462)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Get In Touch
              </button>
              <a
                href="/resume-placeholder.pdf"
                download
                className="px-6 py-3 rounded-xl text-sm font-medium text-[#9aa0b4] border border-white/10 hover:border-white/20 hover:text-[#e8eaf0] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right — Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-6 rounded-3xl border border-[#4fffb0]/10 rotate-3" />
              <div className="absolute -inset-4 rounded-3xl border border-[#7c6aff]/10 -rotate-2" />

              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="https://placehold.co/400x400/0d0d1a/4fffb0?text=YB"
                  alt="Profile photo placeholder"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#4fffb0]/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-6 glass-card rounded-xl px-4 py-3 border border-white/[0.06]"
                style={{ backdropFilter: 'blur(20px)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4fffb0] animate-pulse-slow" />
                  <span
                    className="text-xs text-[#4fffb0] font-mono"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Open to work
                  </span>
                </div>
              </div>

              {/* XP badge */}
              <div
                className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 border border-white/[0.06]"
                style={{ backdropFilter: 'blur(20px)' }}
              >
                <div
                  className="text-lg font-black text-[#7c6aff]"
                  style={{ fontFamily: 'Syne, serif' }}
                >
                  2+
                </div>
                <div
                  className="text-[10px] text-[#9aa0b4] leading-tight"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  years exp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

const TYPED_STRINGS = [
  'Full Stack Developer',
  'React & Next.js Expert',
  'Node.js Engineer',
  'UI/UX Enthusiast',
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [typedText, setTypedText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const currentString = TYPED_STRINGS[stringIndex]
    const speed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentString.slice(0, charIndex + 1))
        if (charIndex + 1 === currentString.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        } else {
          setCharIndex((c) => c + 1)
        }
      } else {
        setTypedText(currentString.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setStringIndex((s) => (s + 1) % TYPED_STRINGS.length)
          setCharIndex(0)
        } else {
          setCharIndex((c) => c - 1)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, stringIndex])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: {
      x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string
    }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const COLORS = ['rgba(79,255,176,', 'rgba(124,106,255,', 'rgba(255,255,255,']

    const spawn = () => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(124,106,255,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    for (let i = 0; i < 80; i++) spawn()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleViewWork = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,106,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 80%, rgba(79,255,176,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4fffb0]/20 bg-[#4fffb0]/5 mb-8 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <span className="w-2 h-2 rounded-full bg-[#4fffb0] animate-pulse-slow" />
          <span
            className="text-[#4fffb0] text-xs tracking-widest uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Available for Work
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-display font-black leading-none mb-6"
          style={{
            fontFamily: 'Syne, serif',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            animationDelay: '0.2s',
            animationFillMode: 'both',
          }}
        >
          <span className="block text-[#e8eaf0]">I am a</span>
          <span
            className="block mt-2"
            style={{
              background: 'linear-gradient(135deg, #4fffb0 0%, #7c6aff 50%, #4fffb0 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 4s ease infinite',
            }}
          >
            {typedText}
            <span className="cursor text-[#4fffb0]" style={{ WebkitTextFillColor: '#4fffb0' }}>
              |
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-[#9aa0b4] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            animationDelay: '0.4s',
            animationFillMode: 'both',
          }}
        >
          Crafting{' '}
          <span className="text-[#e8eaf0] font-normal">performant, scalable web applications</span>{' '}
          with modern technologies. From pixel-perfect UIs to robust APIs — I build experiences
          that{' '}
          <span className="text-[#4fffb0] font-normal">make an impact</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          <button
            onClick={handleViewWork}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-xl text-[#080810] font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,255,176,0.4)] active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #4fffb0, #00c462)',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            <span className="relative z-10">View My Work</span>
            <svg
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </button>

          <button
            onClick={handleContact}
            className="flex items-center gap-3 px-8 py-4 rounded-xl text-[#e8eaf0] font-semibold text-sm border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 active:scale-95"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Let's Talk
          </button>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          {[
            { num: '2+', label: 'Years Experience' },
            { num: '15+', label: 'Projects Built' },
            { num: '10+', label: 'Technologies' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-black text-[#4fffb0] leading-none"
                style={{ fontFamily: 'Syne, serif' }}
              >
                {stat.num}
              </div>
              <div
                className="text-[#9aa0b4] text-xs mt-1 tracking-wider uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#9aa0b4] text-xs tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          scroll
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4fffb0" strokeWidth="2" opacity="0.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}

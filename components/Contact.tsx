'use client'

import { useState, FormEvent } from 'react'

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#e8eaf0',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0a66c2',
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/yourusername',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: '#e8eaf0',
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#4fffb0',
  },
]

type FormState = { name: string; email: string; message: string }
type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Placeholder — replace with actual form submission logic
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#4fffb0] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            // let's connect
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#e8eaf0] mb-4"
            style={{ fontFamily: 'Syne, serif' }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4fffb0, #7c6aff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-[#9aa0b4] text-base max-w-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Email card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.04]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#4fffb0]/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4fffb0" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-sm text-[#9aa0b4]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Email me at
                </span>
              </div>
              <a
                href="mailto:your.email@example.com"
                className="text-[#e8eaf0] font-medium hover:text-[#4fffb0] transition-colors"
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}
              >
                your.email@example.com
              </a>
            </div>

            {/* Social links */}
            <div>
              <p
                className="text-xs text-[#9aa0b4] tracking-widest uppercase mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Find me on
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.name !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 glass-card rounded-xl border border-white/[0.04] hover:border-white/[0.10] transition-all duration-200 group"
                  >
                    <span
                      className="transition-colors"
                      style={{ color: '#9aa0b4' }}
                    >
                      {s.icon}
                    </span>
                    <span
                      className="text-sm text-[#9aa0b4] group-hover:text-[#e8eaf0] transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {s.name}
                    </span>
                    <svg
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9aa0b4"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-white/[0.04]">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-[#9aa0b4] mb-2 tracking-wider uppercase"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="form-input w-full px-4 py-3 rounded-xl bg-[#0d0d1a] text-[#e8eaf0] text-sm border border-white/[0.06] transition-all duration-200 placeholder:text-[#9aa0b4]/40"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[#9aa0b4] mb-2 tracking-wider uppercase"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="form-input w-full px-4 py-3 rounded-xl bg-[#0d0d1a] text-[#e8eaf0] text-sm border border-white/[0.06] transition-all duration-200 placeholder:text-[#9aa0b4]/40"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-[#9aa0b4] mb-2 tracking-wider uppercase"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="form-input w-full px-4 py-3 rounded-xl bg-[#0d0d1a] text-[#e8eaf0] text-sm border border-white/[0.06] transition-all duration-200 placeholder:text-[#9aa0b4]/40 resize-none"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background:
                      status === 'success'
                        ? 'linear-gradient(135deg, #00c462, #4fffb0)'
                        : 'linear-gradient(135deg, #4fffb0, #00c462)',
                    color: '#080810',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {status === 'submitting' && (
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {status === 'success' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {status === 'idle' && 'Send Message'}
                  {status === 'submitting' && 'Sending...'}
                  {status === 'success' && 'Message Sent!'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

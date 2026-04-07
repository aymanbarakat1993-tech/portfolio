'use client'

const skillCategories = [
  {
    label: 'Core Technologies',
    icon: '⚡',
    color: '#4fffb0',
    skills: [
      { name: 'HTML5', color: '#e34f26', bg: 'rgba(227,79,38,0.12)' },
      { name: 'CSS3', color: '#1572b6', bg: 'rgba(21,114,182,0.12)' },
      { name: 'JavaScript', color: '#f7df1e', bg: 'rgba(247,223,30,0.12)' },
      { name: 'TypeScript', color: '#3178c6', bg: 'rgba(49,120,198,0.12)' },
    ],
  },
  {
    label: 'Frontend Development',
    icon: '🎨',
    color: '#7c6aff',
    skills: [
      { name: 'React.js', color: '#61dafb', bg: 'rgba(97,218,251,0.1)' },
      { name: 'Next.js', color: '#e8eaf0', bg: 'rgba(232,234,240,0.07)' },
      { name: 'Tailwind CSS', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)' },
      { name: 'Sass', color: '#cc6699', bg: 'rgba(204,102,153,0.1)' },
      { name: 'Redux', color: '#764abc', bg: 'rgba(118,74,188,0.15)' },
      { name: 'React Query', color: '#ff4154', bg: 'rgba(255,65,84,0.1)' },
    ],
  },
  {
    label: 'Backend Development',
    icon: '⚙️',
    color: '#4fffb0',
    skills: [
      { name: 'Node.js', color: '#339933', bg: 'rgba(51,153,51,0.12)' },
      { name: 'Express.js', color: '#e8eaf0', bg: 'rgba(232,234,240,0.07)' },
      { name: 'MongoDB', color: '#47a248', bg: 'rgba(71,162,72,0.12)' },
      { name: 'Mongoose', color: '#880000', bg: 'rgba(136,0,0,0.12)' },
      { name: 'JWT Auth', color: '#d63aff', bg: 'rgba(214,58,255,0.1)' },
    ],
  },
  {
    label: 'Tools & Workflow',
    icon: '🛠️',
    color: '#ff6b9d',
    skills: [
      { name: 'Git', color: '#f05032', bg: 'rgba(240,80,50,0.12)' },
      { name: 'GitHub', color: '#e8eaf0', bg: 'rgba(232,234,240,0.07)' },
      { name: 'VS Code', color: '#007acc', bg: 'rgba(0,122,204,0.12)' },
      { name: 'Postman', color: '#ff6c37', bg: 'rgba(255,108,55,0.12)' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#4fffb0] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            // stack
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#e8eaf0] mb-4"
            style={{ fontFamily: 'Syne, serif' }}
          >
            Technologies I{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7c6aff, #4fffb0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Work With
            </span>
          </h2>
          <p className="text-[#9aa0b4] text-base max-w-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            A curated set of tools and technologies I use to build modern, production-ready applications.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="glass-card rounded-2xl p-6 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                  style={{ background: `${category.color}15` }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold"
                    style={{
                      fontFamily: 'Syne, serif',
                      color: category.color,
                    }}
                  >
                    {category.label}
                  </h3>
                </div>
                <div
                  className="ml-auto w-20 h-px"
                  style={{ background: `linear-gradient(to right, ${category.color}40, transparent)` }}
                />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.06] transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      background: skill.bg,
                      color: skill.color,
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: skill.color }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip — currently learning */}
        <div className="mt-8 glass-card rounded-2xl p-5 border border-[#4fffb0]/10">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4fffb0] animate-pulse-slow" />
              <span
                className="text-xs text-[#4fffb0] tracking-widest uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Currently Exploring
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'AWS', 'GraphQL', 'Prisma', 'tRPC'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs text-[#9aa0b4] border border-dashed border-white/10"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

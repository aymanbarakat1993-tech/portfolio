import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080810] text-[#e8eaf0] overflow-x-hidden">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="orb w-[600px] h-[600px] opacity-20"
          style={{
            background: 'rgba(124, 106, 255, 0.4)',
            top: '-200px',
            right: '-100px',
            animationDelay: '0s',
          }}
        />
        <div
          className="orb w-[500px] h-[500px] opacity-15"
          style={{
            background: 'rgba(79, 255, 176, 0.3)',
            bottom: '10%',
            left: '-150px',
            animationDelay: '-4s',
          }}
        />
        <div
          className="orb w-[400px] h-[400px] opacity-10"
          style={{
            background: 'rgba(124, 106, 255, 0.25)',
            top: '50%',
            left: '50%',
            animationDelay: '-2s',
          }}
        />
      </div>

      {/* Noise texture */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[1]" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Certifications />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        <Footer />
      </div>
    </main>
  )
}

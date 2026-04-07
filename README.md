# YB Portfolio

A modern, professional portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- 🎨 **Dark theme** with electric green & aurora purple accents
- ⚡ **Animated hero** with particle network canvas and typewriter effect
- 📱 **Fully responsive** — mobile-first design
- 🔁 **Scroll reveal animations** on every section
- 💡 **Lightbox** for certifications
- 📬 **Contact form** with submission feedback
- 🧭 **Sticky navbar** with active section tracking

## 🗂️ Sections

1. **Hero** — Animated intro with typewriter, stats, and CTA
2. **Projects** — Grid of project cards with live/code links
3. **Skills** — Categorized tech stack with brand colors
4. **Certifications** — Gallery with lightbox modal
5. **About** — Bio, highlights, profile image
6. **Contact** — Form + social links

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Syne, DM Sans, JetBrains Mono

## 📝 Customization

Replace all placeholder content:

| File | What to update |
|------|---------------|
| `components/Hero.tsx` | Name, tagline, stats |
| `components/Projects.tsx` | Project title, description, image, URLs |
| `components/Skills.tsx` | Add/remove skills per category |
| `components/Certifications.tsx` | Certificate images, titles, issuers |
| `components/About.tsx` | Bio paragraphs, profile image |
| `components/Contact.tsx` | Email, social media links |
| `components/Footer.tsx` | Social links |
| `app/layout.tsx` | SEO meta title & description |

## 📄 License

MIT — feel free to use and customize.

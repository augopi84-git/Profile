# Gopinath Chinnakaruppan — Executive Profile Website

[![Deploy Profile Website to GitHub Pages](https://github.com/augopi84-git/Profile/actions/workflows/deploy.yml/badge.svg)](https://github.com/augopi84-git/Profile/actions/workflows/deploy.yml)
[![Remotion](https://img.shields.io/badge/Remotion-v4.0-blue?logo=react)](src/remotion)
[![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-green?logo=github)](https://augopi84-git.github.io/)

A modern, high-contrast executive profile website combining programmatic motion graphics (**Remotion**) and modern React, customized for **Gopinath Chinnakaruppan**, Senior Manager at Cognizant, Enterprise Content Management (ECM) Leader, and Gen AI Enthusiast.

---

## 🌟 Key Highlights

### 1. Programmatic Video Reel with Remotion (`src/remotion/`)
* **Interactive In-Browser Player**: Integrated `@remotion/player` rendering a dynamic 15-second motion graphics reel directly in the browser.
* **4 Dedicated Chapters**:
  1. Executive Identity & Cognizant Senior Leadership
  2. OpenText Documentum & Enterprise Content Management Mastery
  3. Global Leadership Footprint (US, Canada, UAE, India) & AI Projects (`Mathippu-AI`, `claude-trading-desk`, `llm-wiki-compiler`)
  4. Future Vision & Architectural Philosophy
* **Headless Video Export**: Render an MP4 video banner programmatically via `npm run render:video`.

### 2. Comprehensive LinkedIn Profile Grounding
* **20+ Years IT Tenure**: Continuous progression at Cognizant from Programmer Analyst (2006) to Senior Manager in Washington, DC.
* **ECM Dominance**: OpenText Documentum 5.x/6.x/7.x (Webtop, DFC, DFS, WDK, BOF, D2, Captiva, BPM, Forms Builder).
* **Multi-Domain Reach**: Healthcare, Insurance (Property & Casualty), Government, and Banking & Financial Services (BFSI).
* **Credentials**: Sun Certified Java Programmer (SCJP 1.5), Documentum CMF (E20-120), AWS Cloud Practitioner.
* **Education**: Bachelor of Engineering (BE) in Mechanical Engineering from the historic **College of Engineering Guindy (CEG)**, Anna University.

---

## 📂 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Actions deployment to GitHub Pages
├── data/
│   └── profile.json                # Source of truth profile data grounded in LinkedIn
├── public/
│   └── favicon.svg                 # Architectural brand mark
├── src/
│   ├── components/                 # React UI components
│   │   ├── Navbar.tsx              # Clean minimal navigation
│   │   ├── Hero.tsx                # Executive hero & video reel viewport
│   │   ├── RemotionPlayerContainer.tsx # Seamless Remotion Player widget
│   │   ├── About.tsx               # Biography & career pillars
│   │   ├── ExperienceTimeline.tsx  # Interactive 9-role Cognizant timeline
│   │   ├── SkillsMatrix.tsx        # Categorized ECM, Gen AI & systems skills
│   │   ├── ProjectsShowcase.tsx    # Mathippu-AI, claude-trading-desk, etc.
│   │   ├── EducationCertifications.tsx # CEG Guindy & credentials
│   │   └── Footer.tsx
│   ├── remotion/                   # Remotion video compositions
│   │   ├── HeroReel.tsx            # Main 15s motion graphics composition
│   │   ├── Root.tsx                # Remotion root composition definition
│   │   └── index.ts                # Remotion CLI entrypoint
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🚀 Local Development

### 1. Start Web Development Server
```bash
# Install dependencies
npm install

# Start Vite live reload server at http://localhost:3000
npm run dev
```

### 2. Render Remotion Video Reel to MP4
```bash
# Renders out/gopinath-profile-reel.mp4 using Remotion CLI
npm run render:video
```

---

## 🌐 Deploying to GitHub Pages (`https://github.com/augopi84-git`)

1. **Create Repository on GitHub**:
   Visit [github.com/new](https://github.com/new) under **`augopi84-git`** (name it `Profile` or `augopi84-git.github.io`).

2. **Push Local Code**:
   ```bash
   git remote add origin https://github.com/augopi84-git/Profile.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   Under **Settings** > **Pages** > **Build and deployment** > **Source**, select **`GitHub Actions`**.

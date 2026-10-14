* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-soft: #121a2e;
  --panel: rgba(17, 24, 39, 0.72);
  --panel-border: rgba(148, 163, 184, 0.2);
  --text: #e5eefc;
  --muted: #a8b3c7;
  --primary: #7c9cff;
  --primary-strong: #5d7ef7;
  --secondary: #8ef0d2;
  --shadow: rgba(15, 23, 42, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: radial-gradient(circle at top, #111827 0%, var(--bg) 38%, #090d18 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(11, 16, 32, 0.7);
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
}

.brand {
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  gap: 2rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: var(--text);
  border-radius: 0.5rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
}

.hero {
  padding: 5rem 0 4rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow,
.section-label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  font-size: 0.74rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.hero-copy h1 {
  font-size: clamp(2.7rem, 6vw, 5rem);
  line-height: 1.04;
  margin: 0;
  letter-spacing: -0.05em;
}

.subtitle {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.1rem;
  margin-top: 1.2rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-strong) 100%);
  color: white;
  box-shadow: 0 16px 30px rgba(93, 126, 247, 0.35);
}

.btn-secondary {
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.35);
  color: var(--text);
}

.quick-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0;
  margin: 2.5rem 0 0;
}

.quick-stats li {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 120px;
}

.quick-stats strong {
  font-size: 1.6rem;
}

.quick-stats span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-card {
  background: linear-gradient(180deg, rgba(17, 24, 39, 0.9), rgba(15, 23, 42, 0.75));
  border: 1px solid var(--panel-border);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 30px 60px var(--shadow);
  text-align: center;
}

.profile-badge {
  display: inline-block;
  background: rgba(142, 240, 210, 0.18);
  color: var(--secondary);
  border: 1px solid rgba(142, 240, 210, 0.25);
  border-radius: 999px;
  font-size: 0.75rem;
  padding: 0.45rem 0.8rem;
  margin-bottom: 1rem;
}

.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: #071321;
  font-size: 2.5rem;
  font-weight: 800;
}

.hero-card h2 {
  margin: 0;
  font-size: 2rem;
}

.hero-card p {
  margin: 0.4rem 0 1.5rem;
  color: var(--muted);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
}

.skill-tags span {
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(124, 156, 255, 0.12);
  border: 1px solid rgba(124, 156, 255, 0.22);
  font-size: 0.8rem;
  color: #dfe9ff;
}

.section {
  padding: 5rem 0;
}

.alt {
  background: rgba(15, 23, 42, 0.3);
}

.two-column {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: start;
}

.two-column h2,
.section h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.two-column p {
  color: var(--muted);
  margin: 0 0 1rem;
}

.card-grid,
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.info-card,
.project-card {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--panel-border);
  border-radius: 1.2rem;
  overflow: hidden;
}

.info-card {
  padding: 1.5rem;
}

.info-card h3 {
  margin-top: 0;
  font-size: 1.4rem;
}

.info-card p {
  color: var(--muted);
  margin: 0;
}

.project-card {
  display: flex;
  flex-direction: column;
}

.project-visual {
  height: 180px;
}

.gradient-one {
  background: linear-gradient(135deg, #60a5fa, #34d399);
}

.gradient-two {
  background: linear-gradient(135deg, #a78bfa, #f472b6);
}

.gradient-three {
  background: linear-gradient(135deg, #f59e0b, #f97316);
}

.project-body {
  padding: 1.35rem 1.2rem 1.5rem;
}

.project-body h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.project-body p {
  color: var(--muted);
  margin: 0;
}

.contact-box {
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.12), rgba(142, 240, 210, 0.08));
  border: 1px solid var(--panel-border);
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.site-footer {
  padding: 1.5rem 0 2.5rem;
  color: var(--muted);
}

.footer-inner {
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  padding-top: 1rem;
}

@media (max-width: 820px) {
  .hero-inner,
  .two-column,
  .card-grid,
  .project-grid,
  .contact-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .nav {
    position: relative;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 0.8rem);
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    background: rgba(11, 16, 32, 0.98);
    border: 1px solid rgba(148, 163, 184, 0.18);
    padding: 1rem;
    border-radius: 1rem;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }

  .quick-stats {
    gap: 1rem;
  }
}

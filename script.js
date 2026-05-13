/* ============================================================
   PORTFOLIO — script.js  (2077 Edition)
   ============================================================ */

// ── DATA ──────────────────────────────────────────────────────
const ROLES = [
  "CSE Student",
  "Data Science Enthusiast",
  "Quick Learner",
  "Problem Solver",
];

const TECH_STACK = [
  { name: "C", icon: "fa-solid fa-code", color: "#a8b9cc" },
  { name: "C++", icon: "fa-solid fa-code", color: "#00599c" },
  { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" },
  { name: "SQL", icon: "fa-solid fa-database", color: "#e48e00" },
  { name: "HTML", icon: "fa-brands fa-html5", color: "#e34f26" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
  { name: "Git", icon: "fa-brands fa-git-alt", color: "#f05032" },
  { name: "PowerPoint", icon: "fa-solid fa-file-powerpoint", color: "#d24726" },
  { name: "Excel", icon: "fa-solid fa-file-excel", color: "#217346" },
  { name: "Data Science", icon: "fa-solid fa-chart-line", color: "#00f5ff" },
  { name: "Linux", icon: "fa-brands fa-linux", color: "#fcc624" },
];

const PROJECTS = [
  {
    name: "HarvestGuard",
    tag: "ai",
    desc: "AI-powered web app that detects plant diseases from photos, monitors soil moisture in real-time, and connects farmers to resources — reducing food loss in Bangladesh.",
    tech: ["Python", "AI/ML", "Web", "IoT", "Agriculture"],
    github: "#",
    live: "#",
  },
];

const TIMELINE = [
  { type: "education", date: "May 2024 — Present", title: "B.Sc in Computer Science & Engineering", org: "East Delta University", desc: "GPA: 3.97/4.00. Currently in 6th semester. Skills: C, Python, Data Science, SQL, Microsoft PowerPoint, and more." },
  { type: "education", date: "Jan 2015 — Mar 2021", title: "Secondary School Certificate (SSC)", org: "Chattogram Collegiate School", desc: "Science group. Grade: 5.00 out of 5.00 scale. Strong foundation in mathematics and science." },
];

const ACHIEVEMENTS = [
  { icon: "🎓", title: "EDU HackFest 2025", detail: "Certificate of Participation — EDU Computer Club, Jan 2026." },
  { icon: "🔬", title: "M³ Short Course", detail: "Measurement Methods in Materials — Billah Multifunctional Nanomaterial Group, BUET, Jan 2026." },
  { icon: "📊", title: "Understanding Data Science", detail: "DataCamp certified — Dec 2025." },
  { icon: "🗃️", title: "Introduction to SQL", detail: "DataCamp certified — Dec 2025." },
  { icon: "📗", title: "Introduction to Microsoft Excel", detail: "Coursera certified — Jun 2024. Credential ID 684UD8QV6SRQ." },
  { icon: "⭐", title: "GPA 3.97 / 4.00", detail: "Consistently high academic performance at East Delta University across 6 semesters." },
  { icon: "🏅", title: "SSC GPA 5.00", detail: "Perfect score in Secondary School Certificate from Chattogram Collegiate School." },
  { icon: "🌾", title: "HarvestGuard Project", detail: "Built AI-powered agriculture solution to reduce food loss in Bangladesh." },
];

// ── LOADER ────────────────────────────────────────────────────
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.body.style.overflow = "auto";
    initReveal();
    animateStats();
  }, 2400);
});
document.body.style.overflow = "hidden";

// ── PARTICLES ─────────────────────────────────────────────────
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let mouse = { x: -500, y: -500 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.8 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,245,255,${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 180);
  particles = [];
  for (let i = 0; i < count; i++) particles.push(new Particle());
}
initParticles();
window.addEventListener("resize", initParticles);

function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,245,255,${0.06 * (1 - dist / 130)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── CUSTOM CURSOR ─────────────────────────────────────────────
const cursorGlow = document.getElementById("cursorGlow");
const cursorDot = document.getElementById("cursorDot");

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

// Button glow follow
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const r = btn.getBoundingClientRect();
    btn.style.setProperty("--x", ((e.clientX - r.left) / r.width) * 100 + "%");
    btn.style.setProperty("--y", ((e.clientY - r.top) / r.height) * 100 + "%");
  });
});

// ── TYPEWRITER ────────────────────────────────────────────────
const heroRole = document.getElementById("heroRole");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const current = ROLES[roleIndex];
  if (!isDeleting) {
    heroRole.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeRole, 2000);
      return;
    }
    setTimeout(typeRole, 70);
  } else {
    heroRole.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
    }
    setTimeout(typeRole, 40);
  }
}
typeRole();

// ── NAV ───────────────────────────────────────────────────────
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const st = window.scrollY;
  nav.classList.toggle("scrolled", st > 50);
  if (st > lastScroll && st > 200) nav.classList.add("hidden");
  else nav.classList.remove("hidden");
  lastScroll = st;

  // Active link
  document.querySelectorAll(".section, .hero").forEach((sec) => {
    const top = sec.offsetTop - 200;
    const id = sec.getAttribute("id");
    if (st >= top) {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) link.classList.add("active");
    }
  });
});

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll(".nav-link").forEach((l) =>
  l.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ── REVEAL ON SCROLL ──────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal-up,.reveal-left,.reveal-right,.tech-item,.project-card,.timeline-item,.achievement-card").forEach((el) => {
    observer.observe(el);
  });
}

// ── STATS COUNTER ─────────────────────────────────────────────
function animateStats() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = parseInt(el.getAttribute("data-target"));
          const duration = 2000;
          const start = performance.now();
          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * ease);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
          }
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll(".stat-number").forEach((el) => observer.observe(el));
}

// ── SKILL BARS ────────────────────────────────────────────────
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.getAttribute("data-width") + "%";
        skillObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll(".skill-bar-fill").forEach((el) => skillObserver.observe(el));

// ── TECH STACK RENDER ─────────────────────────────────────────
const techGrid = document.getElementById("techGrid");
TECH_STACK.forEach((t, i) => {
  const div = document.createElement("div");
  div.className = "tech-item reveal-up";
  div.style.transitionDelay = `${i * 40}ms`;
  div.innerHTML = `<i class="${t.icon} tech-icon" style="color:${t.color}"></i><span class="tech-name">${t.name}</span>`;
  techGrid.appendChild(div);
});

// ── PROJECTS RENDER ───────────────────────────────────────────
const projectsGrid = document.getElementById("projectsGrid");
function renderProjects(filter = "all") {
  projectsGrid.innerHTML = "";
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card reveal-up";
    card.style.transitionDelay = `${i * 80}ms`;
    card.setAttribute("data-tag", p.tag);
    card.innerHTML = `
      <span class="project-tag ${p.tag}">${p.tag.toUpperCase()}</span>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-pills">${p.tech.map((t) => `<span class="project-pill">${t}</span>`).join("")}</div>
      <div class="project-links">
        <a href="${p.github}" class="project-link"><i class="fa-brands fa-github"></i> Code</a>
        ${p.live ? `<a href="${p.live}" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : ""}
      </div>`;
    // 3D tilt
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateY(0) rotateX(0)";
    });
    projectsGrid.appendChild(card);
  });
  // Re-observe
  setTimeout(() => {
    document.querySelectorAll(".project-card").forEach((el) => {
      el.classList.add("visible");
    });
  }, 50);
}
renderProjects();

document.getElementById("projectFilters").addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    renderProjects(e.target.dataset.filter);
  }
});

// ── TIMELINE RENDER ───────────────────────────────────────────
const timeline = document.getElementById("timeline");
TIMELINE.forEach((t, i) => {
  const item = document.createElement("div");
  item.className = "timeline-item reveal-right";
  item.style.transitionDelay = `${i * 100}ms`;
  item.innerHTML = `
    <div class="timeline-dot"></div>
    <span class="timeline-type">${t.type.toUpperCase()}</span>
    <span class="timeline-date">${t.date}</span>
    <h3 class="timeline-title">${t.title}</h3>
    <p class="timeline-org">${t.org}</p>
    <p class="timeline-desc">${t.desc}</p>`;
  timeline.appendChild(item);
});

// ── ACHIEVEMENTS RENDER ───────────────────────────────────────
const achievementsGrid = document.getElementById("achievementsGrid");
ACHIEVEMENTS.forEach((a, i) => {
  const card = document.createElement("div");
  card.className = "achievement-card reveal-up";
  card.style.transitionDelay = `${i * 60}ms`;
  card.innerHTML = `
    <span class="achievement-icon">${a.icon}</span>
    <div>
      <h4 class="achievement-title">${a.title}</h4>
      <p class="achievement-detail">${a.detail}</p>
    </div>`;
  achievementsGrid.appendChild(card);
});

// ── CONTACT FORM ──────────────────────────────────────────────
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector(".btn-submit .btn-text");
  btn.textContent = "Message Sent! ✓";
  btn.closest(".btn").style.borderColor = "#00ff88";
  btn.closest(".btn").style.color = "#00ff88";
  setTimeout(() => {
    btn.textContent = "Send Message";
    btn.closest(".btn").style.borderColor = "";
    btn.closest(".btn").style.color = "";
    e.target.reset();
  }, 3000);
});

// ── SMOOTH SCROLL ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

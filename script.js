// script.js - Interactivity, data, and enhancements

// -----------------------------
// Data: Project Catalog (edit this)
// -----------------------------
const PROJECTS = [
  {
    title: "Task 1 - Landing Page",
    description:
      "Responsive product-style landing page with glassmorphism and gradient accents.",
    thumb: "assets/thumbs/task1.jpg",
    demo: "https://your-demo-link-task1.netlify.app/",
    source:
      "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/task-1",
  },
  {
    title: "Task 2 - Interactive UI",
    description: "Micro-interactions, hover states, and modular components.",
    thumb: "assets/thumbs/task2.jpg",
    demo: "https://your-demo-link-task2.netlify.app/",
    source:
      "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/task-2",
  },
  {
    title: "Task 3 - API Dashboard",
    description: "Data fetching, charts, and responsive cards.",
    thumb: "assets/thumbs/task3.jpg",
    demo: "https://your-demo-link-task3.netlify.app/",
    source:
      "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/task-3",
  },
  {
    title: "Task 4 - Auth + CRUD",
    description: "Node.js + MySQL demo with JWT and CRUD flows.",
    thumb: "assets/thumbs/task4.jpg",
    demo: "https://your-demo-link-task4.netlify.app/",
    source:
      "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/task-4",
  },
  {
    title: "Task 5 - Visualization",
    description: "Canvas/WebGL visualizations with smooth animations.",
    thumb: "assets/thumbs/task5.jpg",
    demo: "https://your-demo-link-task5.netlify.app/",
    source:
      "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/task-5",
  },
];

// -----------------------------
// Helpers
// -----------------------------
function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html) e.innerHTML = html;
  return e;
}

function scrollToSection(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// -----------------------------
// Navbar: Mobile toggle
// -----------------------------
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });
}

// -----------------------------
// Theme toggle (light/dark)
// -----------------------------
const themeToggle = document.getElementById("themeToggle");
const prefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;
const savedTheme = localStorage.getItem("theme");

function applyTheme(theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  localStorage.setItem("theme", theme);
}

applyTheme(savedTheme || (prefersLight ? "light" : "dark"));

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  });
}

// -----------------------------
// Offer Letter modal
// -----------------------------
const offerModal = document.getElementById("offerLetterModal");
function openOfferLetterModal() {
  offerModal.style.display = "flex";
}
function closeOfferLetterModal() {
  offerModal.style.display = "none";
}
window.openOfferLetterModal = openOfferLetterModal;
window.closeOfferLetterModal = closeOfferLetterModal;
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOfferLetterModal();
});
offerModal?.addEventListener("click", (e) => {
  if (e.target === offerModal) closeOfferLetterModal();
});

// -----------------------------
// Lazy-load images
// -----------------------------
const lazyObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            lazyObserver.unobserve(img);
          }
        });
      })
    : null;

// -----------------------------
// Render Projects
// -----------------------------
const projectsGrid = document.getElementById("projectsGrid");
const loadingScreen = document.getElementById("loadingScreen");

function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = "";
  PROJECTS.forEach((p) => {
    const card = el("article", "project-card");
    const thumb = el("div", "project-thumb");
    const img = el("img");
    img.setAttribute("alt", p.title);
    img.setAttribute("loading", "lazy");
    img.dataset.src = p.thumb || "assets/thumbs/placeholder.jpg";
    thumb.appendChild(img);
    thumb.appendChild(el("div", "thumb-glow"));

    if (lazyObserver) lazyObserver.observe(img);
    else img.src = img.dataset.src;

    const body = el("div", "project-body");
    const title = el("h3", "project-title", p.title);
    const desc = el("p", "project-desc", p.description);
    const actions = el("div", "project-actions");
    const demoBtn = el("a", "btn btn-primary");
    demoBtn.href = p.demo || "#";
    demoBtn.target = "_blank";
    demoBtn.rel = "noopener";
    demoBtn.innerHTML = '<i class="fas fa-play"></i> Live Demo';

    const codeBtn = el("a", "btn btn-secondary");
    codeBtn.href = p.source || "#";
    codeBtn.target = "_blank";
    codeBtn.rel = "noopener";
    codeBtn.innerHTML = '<i class="fab fa-github"></i> Source Code';

    actions.append(demoBtn, codeBtn);
    body.append(title, desc, actions);
    card.append(thumb, body);
    projectsGrid.appendChild(card);
  });
}

// -----------------------------
// Scroll reveal
// -----------------------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function markReveal() {
  document
    .querySelectorAll(
      ".project-card, .section-header, .about-content, .offer-letter-card"
    )
    .forEach((el) => {
      el.classList.add("pre-reveal");
      observer.observe(el);
    });
}

// Reveal styles injected
const style = document.createElement("style");
style.textContent = `
.pre-reveal{ opacity:0; transform: translateY(12px); transition: all .5s ease; }
.reveal{ opacity:1; transform: translateY(0); }
`;
document.head.appendChild(style);

// -----------------------------
// Init
// -----------------------------
window.addEventListener("load", () => {
  loadingScreen.style.display = "flex";
  setTimeout(() => {
    renderProjects();
    markReveal();
    loadingScreen.style.display = "none";
  }, 700);
});

// Expose scrollToSection for buttons
window.scrollToSection = scrollToSection;

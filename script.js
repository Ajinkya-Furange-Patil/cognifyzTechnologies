// script.js - Interactivity, data, and enhancements

// -----------------------------
// Data: Project Catalog (edit this)
// -----------------------------
const PROJECTS = [
  {
    level: "Level 1",
    projects: [
      {
        title: "Task 1 - Basic Webpage Creation",
        description:
          "HTML structure with heading, paragraph, and image CSS styling with responsive design Clean, modern aesthetic.",
        thumb: "Level 1/Task 1/basic/output.png",
        demo: "Level 1/Task 1/basic",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%201/Task%201/basic",
      },
      {
        title: "Task 2 - Form Development",
        description:
          "HTML form with input validation, CSS styling with gradient backgrounds, User-friendly interface design.",
        thumb: "Level 1/Task 1/contact-form/output.png",
        demo: "Level 1/Task 1/contact-form",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%201/Task%201/contact-form",
      },
      {
        title: "Task 3 - Navigation Implementation",
        description:
          "Responsive navigation bar, Smooth scrolling effects, Fixed header functionality.",
        thumb: "Level 1/Task 1/navbar/output.png",
        demo: "Level 1/Task 1/navbar",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%201/Task%201/navbar",
      },
      {
        title: "Task 4 - Click Color Button",
        description:
          "A small demo where a button changes color when clicked. Nothing groundbreaking, just a clean toggle to show basic JS interaction.",
        thumb: "Level 1/Task 2/button-toggle/output.png",
        demo: "Level 1/Task 2/button-toggle",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%201/Task%202/button-toggle",
      },
      {
        title: "Task 5 - Mini Add-Only Calculator",
        description:
          "A tiny calculator that adds two numbers and shows the result below the form. Built to stay super simple.",
        thumb: "Level 1/Task 2/mini-calculator/output.png",
        demo: "Level 1/Task 2/mini-calculator",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%201/Task%202/mini-calculator",
      },
      {
        title: "Task 6 - Time-Based Greeting Alert",
        description:
          "Click a button to see a greeting that changes based on the current hour.",
        thumb: "Level 1/Task 2/time-greeting/output.png",
        demo: "Level 1/Task 2/time-greeting",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%201/Task%202/time-greeting",
      },
    ],
  },
  {
    level: "Level 2",
    projects: [
      {
        title: "Task 1 - Responsive Landing Page",
        description:
          "A modern, mobile-friendly landing page built using HTML, CSS, and Flexbox/Grid layout techniques.",
        thumb: "Level 2/Task 1/landing-page/output.png",
        demo: "Level 2/Task 1/landing-page",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%202/Task%201/landing-page",
      },
      {
        title: "Task 2 - Dynamic To-Do App",
        description:
          "An interactive task management app built using JavaScript with localStorage for persistence.",
        thumb: "Level 2/Task 2/todo/output.png",
        demo: "Level 2/Task 2/todo",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%202/Task%202/todo",
      },
      {
        title: "Task 3 - Weather API Integration",
        description:
          "A live weather application fetching real-time data from OpenWeatherMap API using async JS.",
        thumb: "Level 2/Task 3/weather-app/output.png",
        demo: "Level 2/Task 3/weather-app",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%202/Task%203/weather-app",
      },
    ],
  },
  {
    level: "Level 3",
    projects: [
      {
        title: "Task 1 - Full Stack Login System",
        description:
          "Node.js + Express authentication system using MySQL database and bcrypt password hashing.",
        thumb: "Level 3/Task 1/login-system/output.png",
        demo: "Level 3/Task 1/login-system",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%203/Task%201/login-system",
      },
      {
        title: "Task 2 - Product Management Dashboard",
        description:
          "A CRUD web application with Node.js backend and MySQL integration for product management.",
        thumb: "Level 3/Task 2/dashboard/output.png",
        demo: "Level 3/Task 2/dashboard",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%203/Task%202/dashboard",
      },
      {
        title: "Task 3 - E-Commerce Prototype",
        description:
          "An e-commerce front-end prototype with cart functionality and order flow simulation.",
        thumb: "Level 3/Task 3/ecommerce/output.png",
        demo: "Level 3/Task 3/ecommerce",
        source:
          "https://github.com/Ajinkya-Furange-Patil/cognifyzTechnologies/tree/main/Level%203/Task%203/ecommerce",
      },
    ],
  },
];
const projectsContainer = document.getElementById("projectsContainer");

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
  projectsContainer.innerHTML = "";

  PROJECTS.forEach((level) => {
    const levelSection = el("div", "level-section");
    const levelTitle = el(
      "h3",
      "level-heading gradient-text",
      `${level.level}`
    );
    levelSection.appendChild(levelTitle);

    const grid = el("div", "projects-grid");

    level.projects.forEach((p) => {
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
      demoBtn.href = p.demo;
      demoBtn.target = "_blank";
      demoBtn.innerHTML = '<i class="fas fa-play"></i> Live Demo';

      const codeBtn = el("a", "btn btn-secondary");
      codeBtn.href = p.source;
      codeBtn.target = "_blank";
      codeBtn.innerHTML = '<i class="fab fa-github"></i> Source Code';

      actions.append(demoBtn, codeBtn);
      body.append(title, desc, actions);
      card.append(thumb, body);
      grid.append(card);
    });

    levelSection.append(grid);
    projectsContainer.append(levelSection);
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

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Navbar scroll effect
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Trust section fade-up
const trustSection = document.querySelector(".trust");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      trustSection.classList.add("visible");
    }
  },
  { threshold: 0.3 },
);

observer.observe(trustSection);

// About section fade-in
const aboutSection = document.querySelector(".about");

const aboutObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      aboutSection.classList.add("visible");
    }
  },
  { threshold: 0.25 },
);

aboutObserver.observe(aboutSection);

// Process timeline reveal
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 },
);

timelineItems.forEach((item) => timelineObserver.observe(item));

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

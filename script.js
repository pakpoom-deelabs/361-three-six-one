/* ============================================
   361 THREE SIX ONE — Interactions
   ============================================ */

(function () {
  "use strict";

  // ---------- Sticky Navbar Effect ----------
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Mobile Nav Toggle ----------
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
      });
    });
  }

  // ---------- Scroll-triggered Reveal ----------
  const revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" },
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------- Footer Year ----------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Subtle Parallax on Hero ----------
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg && window.matchMedia("(min-width: 720px)").matches) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const y = window.scrollY;
            if (y < window.innerHeight) {
              heroBg.style.transform = `scale(1.05) translateY(${y * 0.18}px)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true },
    );
  }
})();

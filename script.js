document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Smooth scroll ONLY for internal links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (!href.startsWith("#")) return; // allow external links

      e.preventDefault();
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("open");
    });
  });

});


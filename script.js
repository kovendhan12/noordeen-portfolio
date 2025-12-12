document.addEventListener("DOMContentLoaded", () => {
  
  // Smooth scrolling
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const id = this.getAttribute("href").slice(1);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Mobile navbar toggle
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  toggle?.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

// Close nav when clicking outside on small screens
document.addEventListener("click", (event) => {
  if (!nav || !navToggle) return;
  const isClickInside = nav.contains(event.target) || navToggle.contains(event.target);
  if (!isClickInside && nav.classList.contains("open")) {
    nav.classList.remove("open");
  }
});


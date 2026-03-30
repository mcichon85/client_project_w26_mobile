document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const btn = document.querySelector(".nav-toggle");
  if (!nav || !btn) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
});
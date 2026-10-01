const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
}, {passive:true});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:0.12});

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");
menuButton?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "18px 22px";
  nav.style.background = "#090909";
  nav.style.borderBottom = "1px solid #252525";
  nav.style.flexDirection = "column";
  nav.style.gap = "18px";
});

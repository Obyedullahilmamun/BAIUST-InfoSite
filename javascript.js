// ===== Hamburger Toggle =====
function myFunction() {
  var nav = document.getElementById("top_navigation");
  nav.classList.toggle("responsive");
}

// ===== Auto-close Mobile Menu on Link Click =====
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("top_navigation");
  const links = nav.querySelectorAll("a:not(.icon)");

  links.forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive");
      }
    });
  });
});

// ===== Smooth Scroll for In-Page Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Scroll-to-Top Button =====
const topBtn = document.createElement("button");
// topBtn.textContent = "↑";
topBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;">
  <path d="M9 3L9 15" stroke="#f6f6f6ff" stroke-width="2" stroke-linecap="round"/>
  <path d="M3 9L9 3L15 9" stroke="#f6f6f6ff" stroke-width="2" stroke-linecap="round"/>
</svg>`;
topBtn.title = "Scroll to top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.display = "none";
topBtn.style.padding = "10px";
topBtn.style.borderRadius = "5px";
topBtn.style.cursor = "pointer";
topBtn.style.zIndex = "1000";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

// ===== Sticky Header Shadow on Scroll =====
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});


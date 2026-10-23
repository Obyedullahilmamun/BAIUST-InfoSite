// ===== Hamburger Toggle =====
function myFunction() {
  var nav = document.getElementById("top_navigation");
  if (nav) {
    nav.classList.toggle("responsive");
  }
}

// ===== Auto-close Mobile Menu on Link Click =====
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("top_navigation");
  if (!nav) return;
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
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  });
});

// ===== Scroll-to-Top Button =====
const topBtn = document.createElement("button");
topBtn.className = "top-btn";
topBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 4L10 16" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M4 10L10 4L16 10" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
topBtn.title = "Scroll to top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "24px";
topBtn.style.right = "24px";
topBtn.style.display = "none";
topBtn.style.padding = "12px";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.zIndex = "1000";
topBtn.style.background = "linear-gradient(135deg, #00d9a3 0%, #00b894 100%)";
topBtn.style.border = "none";
topBtn.style.boxShadow = "0 4px 15px rgba(0, 217, 163, 0.4)";
topBtn.style.transition = "all 0.3s ease";
topBtn.style.width = "48px";
topBtn.style.height = "48px";
topBtn.style.alignItems = "center";
topBtn.style.justifyContent = "center";
document.body.appendChild(topBtn);

topBtn.addEventListener("mouseenter", () => {
  topBtn.style.transform = "translateY(-3px) scale(1.05)";
  topBtn.style.boxShadow = "0 6px 20px rgba(0, 217, 163, 0.5)";
});

topBtn.addEventListener("mouseleave", () => {
  topBtn.style.transform = "translateY(0) scale(1)";
  topBtn.style.boxShadow = "0 4px 15px rgba(0, 217, 163, 0.4)";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (topBtn) {
    if (window.scrollY > 250) {
      topBtn.style.display = "flex";
    } else {
      topBtn.style.display = "none";
    }
  }
});

// ===== Sticky Header Shadow on Scroll =====
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (header) {
    if (window.scrollY > 40) {
      header.style.boxShadow = "0 4px 20px rgba(15, 76, 117, 0.25)";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(15, 76, 117, 0.1)";
    }
  }
});



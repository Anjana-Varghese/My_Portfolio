// ===== 1. Scroll Spy: Highlight current nav link =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== 2. Optional: Scroll to Top Button (if added) =====
// Add this button in your HTML if you want it:
// <button id="scrollTopBtn" class="btn" title="Go to top">↑</button>
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== 3. Optional: Mobile Menu Toggle (future expansion) =====
// For hamburger menu:
// 1. Add HTML: <div class="menu-toggle">☰</div>
// 2. Style in CSS
// 3. Toggle nav visibility like this:
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

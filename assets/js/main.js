(function () {
  // mobile nav toggle
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navLinks.classList.remove("open"); });
    });
  }

  // theme toggle (persists per-browser only; safe if storage is blocked)
  var themeBtn = document.querySelector(".theme-toggle");
  function applyTheme(theme) {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
  }
  try {
    var saved = localStorage.getItem("theme");
    if (saved) applyTheme(saved);
  } catch (e) {}
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var isDark = current ? current === "dark" : prefersDark;
      var next = isDark ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // abstract expand/collapse on research cards
  document.querySelectorAll(".abstract-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var body = document.getElementById(btn.getAttribute("aria-controls"));
      if (!body) return;
      var open = body.classList.toggle("open");
      btn.textContent = open ? "Hide abstract ↑" : "Read abstract ↓";
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
})();

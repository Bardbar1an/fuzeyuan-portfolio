/* ============================================================
   Fu Zeyuan — Portfolio interactions
   Theme toggle, transcript tabs, nav highlighting, reveal.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Theme ---------- */
  var stored = null;
  try { stored = localStorage.getItem("fz-theme"); } catch (e) { /* storage unavailable */ }

  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored || (prefersDark ? "dark" : "dark"); // dark-first site

  document.documentElement.setAttribute("data-theme", theme);

  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("fz-theme", next); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Transcript tabs ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      var panels = document.querySelectorAll(".tab-panel");
      panels.forEach(function (panel) {
        var on = panel.id === "panel-" + target;
        panel.classList.toggle("active", on);
        panel.hidden = !on;
      });
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

  function highlightNav() {
    var pos = window.scrollY + 120;
    var current = null;
    sections.forEach(function (section) {
      if (pos >= section.offsetTop) current = section.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  /* ---------- Nav shadow on scroll ---------- */
  var nav = document.getElementById("nav");
  window.addEventListener(
    "scroll",
    function () {
      if (nav) nav.style.boxShadow = window.scrollY > 8 ? "0 10px 30px rgba(2,6,23,0.18)" : "none";
    },
    { passive: true }
  );
})();

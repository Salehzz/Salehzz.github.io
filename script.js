(() => {
  const themeToggle = document.querySelector(".theme-toggle");

  if (themeToggle) {
    const updateThemeControl = () => {
      const isDark = document.documentElement.dataset.theme === "dark";
      const nextTheme = isDark ? "light" : "dark";
      const label = `Switch to ${nextTheme} theme`;

      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
      themeToggle.setAttribute("aria-pressed", String(isDark));

      const themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta) themeMeta.setAttribute("content", isDark ? "#0e1412" : "#f7f6f1");
    };

    updateThemeControl();

    themeToggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;

      try {
        localStorage.setItem("theme", nextTheme);
      } catch {
        // The selection still applies for the current page if storage is blocked.
      }

      updateThemeControl();
    });
  }

  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    const setMenu = (open) => {
      nav.dataset.open = String(open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    };

    toggle.addEventListener("click", () => setMenu(nav.dataset.open !== "true"));
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenu(false);
    });
  }

  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkFile = link.getAttribute("href").split("/").pop() || "index.html";
    if (linkFile === currentFile) link.setAttribute("aria-current", "page");
  });

  const filters = document.querySelectorAll("[data-filter]");
  const publications = document.querySelectorAll("[data-publication-status]");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filters.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      publications.forEach((publication) => {
        publication.hidden = filter !== "all" && publication.dataset.publicationStatus !== filter;
      });
    });
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();

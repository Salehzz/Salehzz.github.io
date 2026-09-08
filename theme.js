(() => {
  const root = document.documentElement;

  const readSavedTheme = () => {
    try {
      const value = localStorage.getItem("theme");
      return value === "light" || value === "dark" ? value : null;
    } catch (error) {
      return null;
    }
  };

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const updateControls = (theme) => {
    const isDark = theme === "dark";
    const nextTheme = isDark ? "light" : "dark";
    const controlLabel = `Switch to ${nextTheme} mode`;

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-label", controlLabel);
      button.setAttribute("title", controlLabel);
      button.setAttribute("aria-pressed", String(isDark));

      const visibleLabel = button.querySelector("[data-theme-label]");
      if (visibleLabel) visibleLabel.textContent = `${nextTheme[0].toUpperCase()}${nextTheme.slice(1)} mode`;
    });

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute("content", isDark ? "#0e1412" : "#f7f6f1");
  };

  const applyTheme = (theme, saveChoice) => {
    root.dataset.theme = theme;

    if (saveChoice) {
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        // The choice still applies to the current page when storage is blocked.
      }
    }

    updateControls(theme);
  };

  applyTheme(readSavedTheme() || systemTheme, false);

  const connectControls = () => {
    updateControls(root.dataset.theme);

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme, true);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", connectControls, { once: true });
  } else {
    connectControls();
  }
})();

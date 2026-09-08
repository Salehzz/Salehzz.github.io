(() => {
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem("theme");
  } catch {
    // Storage may be unavailable in privacy-restricted contexts.
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : prefersDark ? "dark" : "light";

  document.documentElement.dataset.theme = theme;
})();

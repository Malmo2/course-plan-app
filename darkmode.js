// Theme Toggle with System Preference Support
const storageKey = "theme-preference";
const root = document.documentElement;

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  if (theme.value === "dark") {
    root.classList.add("dark-mode");
  } else {
    root.classList.remove("dark-mode");
  }

  const themeToggle = document.querySelector("#theme-toggle");
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", theme.value);
  }
};

const theme = {
  value: getColorPreference(),
};

// Set early so no page flashes
reflectPreference();

const onClick = () => {
  // Flip current value
  theme.value = theme.value === "light" ? "dark" : "light";
  setPreference();
};

// Set on load so screen readers can see latest value
window.addEventListener("DOMContentLoaded", () => {
  reflectPreference();

  // Listen for clicks on the theme toggle
  const themeToggle = document.querySelector("#theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", onClick);
  }
});

// Sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });

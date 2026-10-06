// Light is the default. A saved choice wins; ?theme=dark|light previews without saving.
// Runs inline in <head> (as a string) and again on the 404, whose error shell loses the head script's work.
export function applyTheme() {
  try {
    const t = new URLSearchParams(location.search).get("theme") || localStorage.getItem("theme");
    if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
  } catch {}
}

export const themeScript = `(${applyTheme})()`;

import "./styles.css";

/** Loads shared styles and marks the document as ready for page-specific scripts. */
export function initApp(): void {
    document.documentElement.classList.add("loaded");
}

initApp();

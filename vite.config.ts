import { resolve } from "node:path";
import { defineConfig } from "vite";

/** Configures Vite for a multi-page static site with shared TypeScript entries. */
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                privacy: resolve(__dirname, "privacy.html"),
                terms: resolve(__dirname, "terms.html"),
                deleteAccount: resolve(__dirname, "delete-account.html"),
            },
        },
    },
});

import { defineConfig } from "vite"
import { resolve } from "path"

// PLUGINS

import react from "@vitejs/plugin-react"

export default defineConfig({
    resolve: {
        alias: {
            $: resolve(__dirname, "./src"),
        },
    },

    plugins: [
        react({
            include: ["src/**/*.tsx", "src/**/*.jsx"],
        }),
    ],
})

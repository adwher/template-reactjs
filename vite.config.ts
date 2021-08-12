import { defineConfig } from "vite"
import { resolve } from "path"

// plugins

import react from "@vitejs/plugin-react-refresh"

export default defineConfig({
    resolve: {
        alias: {
            "~": resolve(__dirname, "./src"),

            "@components": resolve(__dirname, "./src/components"),
            "@hooks": resolve(__dirname, "./src/hooks"),
            "@models": resolve(__dirname, "./src/models"),
            "@pages": resolve(__dirname, "./src/pages"),
            "@services": resolve(__dirname, "./src/services"),
            "@usecases": resolve(__dirname, "./src/usecases"),
        }
    },

    plugins: [
        react({
            include: ["src/**/*.tsx", "src/**/*.jsx"]
        }),
    ]
})
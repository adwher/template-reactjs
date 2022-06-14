import react from "@vitejs/plugin-react"
import unocss from "unocss/vite"

import presetUno from "@unocss/preset-uno"
import presetVariants from "@unocss/transformer-variant-group"

import { defineConfig } from "vite"
import { resolve } from "path"

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

        unocss({
            presets: [presetUno(), presetVariants()],

            theme: {
                colors: {
                    primary: {
                        500: "#4ac5ff",
                    },
                    secondary: {
                        500: "#916cff",
                    },
                },
            },
        }),
    ],
})

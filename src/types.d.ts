// styles

declare module "*.css"
declare module "*.sass"
declare module "*.scss"

// vitejs

declare interface ImportMeta {
    /**
     * Vite exposes [env variables](https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes) on the special `import.meta.env` object. Some built-in variables are available in all cases like `DEV` or `MODE` and also can type some variants in the `types.d.ts` file.
     *
     * @example
     * ```ts
     * declare interface ImportMeta {
     *  /// Other declarations...
     *
     *  env: {
     *      readonly VITE_APP_HELLO_WORLD: string
     *  }
     * }
     * ```
     */
    env: {
        readonly MODE: string
        readonly BASE_URL: string
        readonly PROD: boolean
        readonly DEV: boolean

        readonly [key: string]: any
    }

    /** Vite supports [importing multiple modules](https://vitejs.dev/guide/features.html#glob-import) from the file system via the special `import.meta.glob` function */
    glob(path: string): any
}

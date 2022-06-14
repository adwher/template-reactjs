function Home() {
    return (
        <main className="flex flex-col justify-center items-center p-10">
            <img
                className="w-full max-w-80 h-80 mb-10"
                src="/vitejs.svg"
                alt="Vitejs Logo"
            />

            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 text-size-2rem sm:text-size-3rem lg:text-size-4rem text-center mb-10">
                Hello world
            </h1>

            <p className="text-center mb-5">
                Welcome to the Vite.js template by{" "}
                <a
                    className="c-secondary-500"
                    href="https://github.com/adwher"
                    target="_blank"
                    rel="noopener"
                >
                    @adwher
                </a>
                . Let's this project begin at <code>src/main.tsx</code> and
                start to make awesome things.
            </p>

            <div className="">
                <a
                    className="c-secondary-500"
                    href="https://github.com/adwher/template-reactjs"
                    target="_blank"
                    rel="noopener"
                >
                    <span>Go to GitHub</span>
                </a>
            </div>
        </main>
    )
}

export default Home

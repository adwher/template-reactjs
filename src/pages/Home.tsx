import React from "react"

function Home() {
    return (
        <main className="content-1 flex-view gap-3 text-center flex-centered">
            <img className="height-2" src="/vitejs.svg" alt="Vitejs Logo" />

            <h1>Hello world</h1>

            <p>Welcome to the Vite.js template by <a href="https://github.com/adwher" target="_blank" rel="noopener">@adwher</a>. Let's this project begin at <code>src/main.tsx</code> and start to make awesome things.</p>

            <div className="wrapper">
                <a className="button" href="https://github.com/adwher/template-reactjs" target="_blank" rel="noopener">
                    <span>Go to GitHub</span>
                </a>
            </div>
        </main>
    )
}

export default Home

import { Link } from "react-router-dom"

function NotFound() {
    return (
        <main className="content-1 gap-bg text-center flex-centered">
            <img
                className="w-full max-w-80 h-80 mb-10"
                src="/vitejs.svg"
                alt="Vitejs Logo"
            />

            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 text-size-2rem sm:text-size-3rem lg:text-size-4rem text-center mb-10">
                Error
            </h1>

            <p className="text-center mb-5">
                Oops... something is wrong, I can feel it.
            </p>

            <div className="">
                <Link to="/" className="c-secondary-500">
                    <span>Take me home</span>
                </Link>
            </div>
        </main>
    )
}

export default NotFound

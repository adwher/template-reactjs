import { Link } from "react-router-dom"

function NotFound() {
    return (
        <main className="content-1 gap-bg text-center flex-centered">
            <img className="height-2" src="/vitejs.svg" alt="Vitejs Logo" />

            <h1>Error</h1>

            <p>Oops... something is wrong, I can feel it.</p>

            <div className="wrapper">
                <Link to="/" className="button">
                    <span>Take me home</span>
                </Link>
            </div>
        </main>
    )
}

export default NotFound

import { StrictMode, Suspense } from "react"

import Router from "./router"
import Loading from "./pages/Loading"

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Router />
        </Suspense>
    )
}

export default App

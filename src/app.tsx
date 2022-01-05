import React, { lazy, Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Router from "./router"
import Loading from "./pages/Loading"

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Suspense>
    )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"

// PAGES

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

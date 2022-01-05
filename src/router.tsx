import { Switch, Route } from "react-router-dom"

// PAGES

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Router

import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { routes } from "./router"

import Loading from "./pages/Loading"

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Switch>
                    {
                        routes.map(({ path, component }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={true}
                                component={lazy(component)}
                            />
                        ))
                    }
                </Switch>
            </Router>
        </Suspense>
    )
}

export default App
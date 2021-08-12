import { FunctionComponent, ComponentType } from "react"

interface Route {
    path: string
    component: () => Promise<{ default: FunctionComponent | ComponentType }>
}

export const routes: Route[] = [
    {
        path: "/",
        component: () => import("./pages/Home")
    },

    {
        path: "*",
        component: () => import("./pages/NotFound")
    }
]
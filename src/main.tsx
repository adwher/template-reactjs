import App from "./app"
import { createRoot } from "react-dom/client"

import "uno.css"
import "$/styles/index.scss"

const el = document.querySelector("#app")
const root = createRoot(el)

root.render(<App />)

import App from "./app"
import { createRoot } from "react-dom/client"

import "uno.css"
import "$/styles/index.scss"

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
